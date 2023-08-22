import useSWR from "swr";
import { formatUnits } from "viem";
import {
  POLYGON_TOKENS_BY_ADDRESS,
  POLYGON_TOKENS_BY_SYMBOL,
  POLYGON_TOKENS,
  exchangeProxy,
  MAX_ALLOWANCE,
} from "../../lib/constants";
import { fetcher } from "../Price";
import { useEffect, useState } from "react";
import type { PriceResponse, QuoteResponse } from "../api/types";
import {
  useAccount,
  erc20ABI,
  useContractRead,
  usePrepareContractWrite,
  useSendTransaction,
  usePrepareSendTransaction,
  type Address,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

export default function QuoteView({
  price,
  quote,
  setQuote,
  takerAddress,
  userBalance,
  setFinalize,
  }: {
  price: PriceResponse;
  quote: QuoteResponse | undefined;
  setQuote: (price: any) => void;
  takerAddress: Address | undefined;
  userBalance: string,
  showOrder: boolean;
  setShowOrder: React.Dispatch<React.SetStateAction<boolean>>;
  setFinalize: (finalize: boolean) => void;
}) {

  const DEFAULT_TOKEN_IMAGE = "/path/to/default/token/image.png";
// existing state
  const [localQuote, setLocalQuote] = useState<QuoteResponse | undefined>();

  const { address: userAddress } = useAccount()
  const { isLoading: isLoadingPrice } = useSWR(
    [
      "/api/quote",
      {
        sellToken: price?.sellTokenAddress,
        buyToken: price?.buyTokenAddress,
        sellAmount: price?.sellAmount,
        // buyAmount: TODO if we want to support buys,
        takerAddress,
      },
    ],
    fetcher,
    {
      onSuccess: (data) => {
        if (data) {
            setLocalQuote(data); // Updated here
        } else {
            setLocalQuote(defaultQuote);  // Updated here
        }
        console.log("quote", data);
    }
  }
  );

  const sellTokenInfo = price && price.sellTokenAddress 
    ? POLYGON_TOKENS_BY_ADDRESS[price.sellTokenAddress.toLowerCase()] 
    : undefined;

  // Check if price exists and has buyTokenAddress, else fallback to undefined
  const buyTokenInfo = price && price.buyTokenAddress 
    ? POLYGON_TOKENS_BY_ADDRESS[price.buyTokenAddress.toLowerCase()] 
    : undefined;

  const sellTokenDecimals = sellTokenInfo?.decimals || 18;
  const buyTokenDecimals = buyTokenInfo?.decimals || 18;  // Use 18 as a default if not found
  const [sellAmount, setSellAmount] = useState("");
  const [buyAmount, setBuyAmount] = useState("");
  const [sellToken, setSellToken] = useState("");
  const [buyToken, setBuyToken] = useState("");
  const buyTokenDetails = POLYGON_TOKENS_BY_SYMBOL[buyToken] || {};
  const sellTokenDetails = POLYGON_TOKENS_BY_SYMBOL[sellToken] || {};
  const buyTokenLogoURI = buyTokenDetails.logoURI || DEFAULT_TOKEN_IMAGE; // Use a default image if not found
  const sellTokenLogoURI = sellTokenDetails.logoURI || DEFAULT_TOKEN_IMAGE;  
  const [customTokenAddress, setCustomTokenAddress] = useState("");
  const [tradeDirection, setTradeDirection] = useState("sell");
  
  const { data: fetchedSellTokenBalance } = useContractRead({
    address: sellTokenInfo?.address,  // Use the optional chaining operator here
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [takerAddress],
  });

  const { data: fetchedBuyTokenUserBalance } = useContractRead({
    address: buyTokenInfo?.address,
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [takerAddress],
  });

  const { data: customTokenName } = useContractRead({
    address: customTokenAddress,
    abi: erc20ABI,
    functionName: "name",
  });

  const { data: customTokenDecimals } = useContractRead({
    address: customTokenAddress,
    abi: erc20ABI,
    functionName: "decimals",
  });

  useEffect(() => {
    if (customTokenSymbol && customTokenName && customTokenDecimals !== undefined) {
      setSearchedToken({
        symbol: customTokenSymbol,
        name: customTokenName,
        decimals: customTokenDecimals,
        logoURI: DEFAULT_TOKEN_IMAGE,
        address: customTokenAddress,
      });
    }
  }, [customTokenName, customTokenDecimals]);

  const [searchedToken, setSearchedToken] = useState(null); //////////////////

  const { data: customTokenSymbol } = useContractRead({////////////////////
    address: customTokenAddress, // contract address entered by the user
    abi: erc20ABI,
    functionName: "symbol",
  });
  const { config: quoteConfig } = usePrepareSendTransaction({
    to: quote?.to,
    data: quote?.data,
  });
  
  const { config: localQuoteConfig } = usePrepareSendTransaction({
    to: localQuote?.to,
    data: localQuote?.data,
  });
  
  // Determine which config to use when sending the transaction
  const activeConfig = localQuote ? localQuoteConfig : quoteConfig;
  
  const { sendTransaction } = useSendTransaction(activeConfig);

  const handleTokenSwap = () => {
    const tempToken = sellToken;
    setSellToken(buyToken);
    setBuyToken(tempToken);
  };

  function formatToFixedDecimals(value, decimals = 5) {
    // Convert the value to a number with the given decimals
    const factor = Math.pow(10, decimals);
    const formattedValue = Math.round(value * factor) / factor;
    
    // Return the value as a fixed string
    return formattedValue.toFixed(decimals);
}
  const handleSellTokenChange = (value: string) => {
    if (!POLYGON_TOKENS_BY_SYMBOL[value] && searchedToken?.symbol === value) {
      POLYGON_TOKENS_BY_SYMBOL[value] = {
        ...searchedToken,
        decimals: customTokenDecimals,
      };
    }
    setSellToken(value);
  };

  const handleBuyTokenChange = (value: string) => {
    if (!POLYGON_TOKENS_BY_SYMBOL[value] && searchedToken?.symbol === value) {
      POLYGON_TOKENS_BY_SYMBOL[value] = {
        ...searchedToken,
        decimals: customTokenDecimals,
      };
    }
    setBuyToken(value); 
  };
  
  if (!localQuote || !price) {
    return (
      localQuote ? (
        <button
          className={`bg-blue-300 hover:bg-blue-700 text-white font-bold py-4 px-4 mb-5 rounded-xl w-full ${isLoadingPrice ? 'opacity-50 cursor-not-allowed' : ''}`} 
          style={{ backgroundColor: '#5100ff' }}
          onClick={() => {
            console.log("submitting quote to blockchain");
            sendTransaction && sendTransaction();
          }}
          disabled={isLoadingPrice}
        >
          Swap
        </button>
      ) : (
        <div>
          <button
            type="button"
            className={`bg-blgg hover:bg-blue-700 text-white font-bold py-4 px-4 mb-5 rounded-xl w-full ${isLoadingPrice ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={() => {
              // This can be any logic to prompt the user for input or navigate them back to the input page
              alert('Please enter an amount.');
            }}
          >
            Enter an Amount
          </button>
        </div>
      )
    );
  }

return (
      <button
        className={`bg-blgg hover:bg-blue-700 text-white font-bold py-4 px-4 mb-5 rounded-xl w-full ${isLoadingPrice ? 'opacity-50 cursor-not-allowed' : ''}`} 
        style={{ backgroundColor: '#5100ff' }}
        onClick={() => {
          console.log("submitting quote to blockchain");
          sendTransaction && sendTransaction();
        }}
        disabled={isLoadingPrice}
      >
        Swap
      </button>
);
}