import qs from "qs";
import useSWR from "swr";
import { ConnectKitButton } from "connectkit";
import { Listbox } from '@headlessui/react';
import { useState, useEffect } from "react";
import { formatUnits, parseUnits } from "viem";
import {
  erc20ABI,
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  type Address,
} from "wagmi";
import {
  POLYGON_TOKENS,
  POLYGON_TOKENS_BY_SYMBOL,
  MAX_ALLOWANCE,
  exchangeProxy,
} from "../../lib/constants";

interface PriceRequestParams {
  sellToken: string;
  buyToken: string;
  buyAmount?: string;
  sellAmount?: string;
  takerAddress?: string;
}

export const fetcher = ([endpoint, params]: [string, PriceRequestParams]) => {
  const { sellAmount, buyAmount } = params;
  if (!sellAmount && !buyAmount) return;
  const query = qs.stringify(params);

  return fetch(`${endpoint}?${query}`).then((res) => res.json());
};

const DEFAULT_TOKEN_IMAGE = "/path/to/your/default/image.png"; // Replace with your default image path

export default function PriceView({
  setPrice,
  setFinalize,
  setUserBalance,
  userBalance,
  takerAddress,
}: {
  price: any;
  setPrice: (price: any) => void;
  setFinalize: (finalize: boolean) => void;
  userBalance: string,
  setUserBalance?: (balance: string) => void;  // <-- Add this if needed
  takerAddress: Address | undefined;
  showOrder: boolean;
  setShowOrder: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // fetch price here
  const [sellAmount, setSellAmount] = useState("");
  const [buyAmount, setBuyAmount] = useState("");
  const [tradeDirection, setTradeDirection] = useState("sell");
  const [sellToken, setSellToken] = useState("weth");
  const [buyToken, setBuyToken] = useState("dai");
  const [hasUserTyped, setHasUserTyped] = useState(false);
  const [customTokenAddress, setCustomTokenAddress] = useState('');
  const [isFetchingToken, setIsFetchingToken] = useState(false);
  const tokenData = POLYGON_TOKENS_BY_SYMBOL[sellToken];
  const address = tokenData?.address;
  const sellTokenDetails = POLYGON_TOKENS_BY_SYMBOL[sellToken] || {};
  const sellTokenLogoURI = sellTokenDetails.logoURI || DEFAULT_TOKEN_IMAGE;  
  const sellTokenAddress = sellTokenDetails ? sellTokenDetails.address : undefined;
  const sellTokenDecimals = sellTokenDetails?.decimals || 18;
  const buyTokenDetails = POLYGON_TOKENS_BY_SYMBOL[buyToken] || {};
  const buyTokenDecimals = buyTokenDetails?.decimals || 18;
  const buyTokenAddress = buyTokenDetails.address;
  const buyTokenLogoURI = buyTokenDetails.logoURI || DEFAULT_TOKEN_IMAGE; // Use a default image if not found
  const sellTokenData = POLYGON_TOKENS_BY_SYMBOL[sellToken];
  const buyTokenData = POLYGON_TOKENS_BY_SYMBOL[buyToken];
  const stringValue = "123456789012345678901234567890";
  const bigintValue = BigInt(stringValue);
  const userBalanceBigInt = BigInt(userBalance);
  const [sellTokenUserBalance, setSellTokenUserBalance] = useState<string>("0");
  const [buyTokenUserBalance, setBuyTokenUserBalance] = useState<string>("0");

  const { data: fetchedSellTokenBalance } = useContractRead({
    address: sellTokenData?.address,
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [takerAddress],
  });
  const { data: fetchedBuyTokenBalance } = useContractRead({
    address: buyTokenData?.address,
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [takerAddress],
  });

  const { data: fetchedUserBalance } = useContractRead({
    address: address, // Use the safely accessed address here
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
  
  const handleTokenSwap = () => {
    const tempToken = sellToken;
    setSellToken(buyToken);
    setBuyToken(tempToken);
  };

  useEffect(() => {
    if (fetchedSellTokenBalance) {
      setSellTokenUserBalance(fetchedSellTokenBalance.toString());
    } else {
      console.log("Sell Token Balance not fetched");
    }
  }, [fetchedSellTokenBalance]);
  
  useEffect(() => {
    if (fetchedBuyTokenBalance) {
      setBuyTokenUserBalance(fetchedBuyTokenBalance.toString());
    } else {
      console.log("Buy Token Balance not fetched");
    }
  }, [fetchedBuyTokenBalance]);

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
    setBuyToken(value); // This line ensures that the buyToken state is updated
  };
  console.log("sellAmount:", sellAmount);
  console.log("buyAmount:", buyAmount);
  console.log("tradeDirection:", tradeDirection);
  console.log("sellTokenDecimals:", sellTokenDecimals);
  console.log("buyTokenDecimals:", buyTokenDecimals);
  const parsedSellAmount =
    sellAmount && tradeDirection === "sell"
      ? parseUnits(sellAmount, sellTokenDecimals).toString()
      : undefined;

  const parsedBuyAmount =
    buyAmount && tradeDirection === "buy"
      ? parseUnits(buyAmount, buyTokenDecimals).toString()
      : undefined;

  const { isLoading: isLoadingPrice } = useSWR(
    [
      "/api/price",
      {
        sellToken: sellTokenAddress,
        buyToken: buyTokenAddress,
        sellAmount: parsedSellAmount,
        buyAmount: parsedBuyAmount,
        takerAddress,
      },
    ],
    fetcher,
    {
      onSuccess: (data) => {
        setPrice(data);
        if (tradeDirection === "sell") {
          setBuyAmount(formatUnits(data.buyAmount, buyTokenDecimals));
        } else {
          setSellAmount(formatUnits(data.sellAmount, sellTokenDecimals));
        }
      },
    }
  );
  const [searchedToken, setSearchedToken] = useState(null); //////////////////

  const { data: customTokenSymbol } = useContractRead({////////////////////
    address: customTokenAddress, // contract address entered by the user
    abi: erc20ABI,
    functionName: "symbol",
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
  }, [customTokenSymbol, customTokenName, customTokenDecimals]);

  console.log("Rendering PriceView");
  return (
    <>
    <div>
      <div className="relative w-9/10 mx-auto transform color-custom-er">
        <div className="dark:bg-slate-800 rounded-3xl pt-2.5 p-3" style={{ backgroundColor: '#0e0e0e' }}>
          <form>
            <p className="text-lg font-bold pl-2 text-white mb-1">SWAP</p>
            <div className="relative bg-slate-200 dark:bg-slate-800 rounded-md w-full" style={{ backgroundColor: '#0e0e0e' }}>
              <div className="dark:bg-slate-700 rounded-xl max-w-md" style={{ backgroundColor: '#141316' }}>
                <div className="flex-grow pl-4 pr-2 pt-1 pb-1 mb-1.5  rounded-xl w-full hover:border-custom-er border-transparent border hover:border-current">
                  <section className="flex items-center justify-between w-full">
                  <label htmlFor="sell-amount" className="sr-only"></label>
                    <input
                      id="sell-amount"
                      value={sellAmount}
                      className="bg-transparent text-xl flex-shrink outline-none text-left font-medium"
                      onChange={(e) => {
                        setTradeDirection("sell");
                        setSellAmount(e.target.value);
                        setHasUserTyped(true);  // Set to true when user types
                      }}
                    />
                    <label htmlFor="sell-select" className="sr-only"></label>
                    <div className="flex flex-col max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                      <Listbox as="div" className="rounded-xl p-2" style={{ backgroundColor: '#141416' }} value={sellToken} onChange={handleSellTokenChange}>
                          {({ open }) => (
                              <>
                                  <div className="relative">
                                    <Listbox.Button as="button" className="flex items-center justify-center p-2 border border-custom-e rounded-xl w-full text-sm font-bold uppercase">
                                      <img alt={sellToken} className="w-4 h-4 mr-1 rounded-md" src={sellTokenLogoURI} />
                                      <span className="truncate">{sellToken}</span>
                                    </Listbox.Button>
                                      <Listbox.Options as="ul" className="absolute z-10 mt-2 w-full bg-black rounded-md shadow-lg">
                                        <li>
                                          <input
                                            type="text"
                                            placeholder="Enter contract address..."
                                            value={customTokenAddress}
                                            onChange={(e) => setCustomTokenAddress(e.target.value)}
                                            className="p-2 w-full"
                                          />
                                        </li>
                                        {searchedToken && (
                                          <Listbox.Option value={searchedToken.symbol.toLowerCase()} as="li" className="cursor-pointer select-none relative px-4 py-4">
                                            {searchedToken.name} ({searchedToken.symbol})
                                          </Listbox.Option>
                                        )}
                                        {POLYGON_TOKENS.map((token) => (
                                          <Listbox.Option key={token.address} value={token.symbol.toLowerCase()} as="li" className="cursor-pointer select-none relative px-4 py-4">
                                            <img alt={token.symbol} className="h-6 w-6 mr-1 rounded-md" src={token.logoURI} />
                                            {token.symbol}
                                          </Listbox.Option>
                                        ))}
                                      </Listbox.Options>
                                  </div>
                              </>
                          )}
                      </Listbox>
                      {/* Display user's balance here */}
                      <div className="mb-2 text-xs text-right pr-4">
                        Balance: {parseFloat(formatUnits(sellTokenUserBalance, sellTokenDecimals)).toFixed(4)}
                      </div>
                  </div>
                  </section>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 flex items-center pb-1 pt-1 justify-center border-4 border-bkgg rounded-lg cursor-pointer" style={{ backgroundColor: '#141416' }} onClick={handleTokenSwap}>
                <img src="/arrow.SVG" alt="" style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }} />
              </div>
              <div className="dark:bg-slate-700 rounded-xl max-w-md" style={{ backgroundColor: '#141316' }}>
              <div className="flex-grow pl-4 pr-2 pt-1 pb-1 mb-1.5  rounded-xl w-full hover:border-custom-er border-transparent border hover:border-current">
                <section className="flex items-center justify-between w-full">
                <label htmlFor="buy-amount" className="sr-only"></label>
                  <input
                    id="buy-amount"
                    value={isNaN(parseFloat(buyAmount)) ? "" : parseFloat(buyAmount).toFixed(5)}
                    className="bg-transparent text-xl flex-shrink outline-none text-left font-medium"
                    disabled
                    onChange={(e) => {
                      setTradeDirection("buy");
                      setBuyAmount(e.target.value);
                    }}
                  />
                  <label htmlFor="buy-token" className="sr-only"></label>
                  <div className="flex flex-col max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                      <Listbox as="div" className="rounded-lg p-2" style={{ backgroundColor: '#141416' }} value={buyToken} onChange={handleBuyTokenChange}>
                          {({ open }) => (
                              <>
                                  <div className="relative">
                                      <Listbox.Button as="button" className="flex items-center justify-center p-2 border border-custom-e rounded-xl w-full text-sm font-bold uppercase">
                                          <img alt={buyToken} className="w-4 h-4 mr-1 rounded-md" src={buyTokenLogoURI} />
                                          <span className="truncate">{buyToken}</span>
                                      </Listbox.Button>
                                      <Listbox.Options as="ul" className="absolute z-10 mt-2 w-full bg-black rounded-md shadow-lg">
                                        <li>
                                            <input
                                                type="text"
                                                placeholder="Enter contract address..."
                                                value={customTokenAddress}
                                                onChange={(e) => setCustomTokenAddress(e.target.value)}
                                                className="p-2 w-full"
                                            />
                                        </li>
                                        {searchedToken && (
                                            <Listbox.Option value={searchedToken.symbol.toLowerCase()} as="li" className="cursor-pointer select-none relative px-2 py-4 flex items-center space-x-2">
                                                <span className="truncate">{searchedToken.name} ({searchedToken.symbol})</span>
                                            </Listbox.Option>
                                        )}
                                        {POLYGON_TOKENS.map((token) => (
                                            <Listbox.Option key={token.address} value={token.symbol.toLowerCase()} as="li" className="cursor-pointer select-none relative px-2 py-4 flex items-center space-x-2">
                                                <img alt={token.symbol} className="h-6 w-6 rounded-md" src={token.logoURI} />
                                                <span className="truncate">{token.symbol}</span>
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                  </div>
                              </>
                          )}
                      </Listbox>
                      <div className="mb-2 text-xs text-right pr-4">
                      Balance: {parseFloat(formatUnits(buyTokenUserBalance, buyTokenDecimals)).toFixed(4)}
                      </div>
                  </div>
                  </section>
                </div>
              </div>
            </div>
            {takerAddress ? (
              <ApproveOrReviewButton
                sellTokenAddress={sellTokenAddress}
                takerAddress={takerAddress}
                onClick={() => {
                setFinalize(true);
                }}
              />
            ) : (
              <ConnectKitButton.Custom>
                {({
                  isConnected,
                  isConnecting,
                  show,
                  hide,
                  address,
                  ensName,
                  chain,
                }) => {
                  return (
                    <button
                      onClick={() => {
                        show();
                        if(isConnected) {
                        }
                      }}
                      type="button"
                      className="bg-gray-500 hover:bg-blue-700 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl w-full">
                      {isConnected ? address : "Connect Wallet"}
                    </button>
                  );
                }}
              </ConnectKitButton.Custom>
            )}
          </form>
          </div>
      </div>
      <div className=" scale-110">
      </div>
    </div>
   </>
  );
}

function ApproveOrReviewButton({
  takerAddress,
  onClick,
  sellTokenAddress,
  setShowQuote,
}: {
  takerAddress: Address;
  onClick: () => void;
  sellTokenAddress: Address;
  setShowQuote: (show: boolean) => void;
}) {
  const { data: allowance, refetch } = useContractRead({
    address: sellTokenAddress,
    abi: erc20ABI,
    functionName: "allowance",
    args: [takerAddress, exchangeProxy],
  });

  const { config } = usePrepareContractWrite({
    address: sellTokenAddress,
    abi: erc20ABI,
    functionName: "approve",
    args: [exchangeProxy, MAX_ALLOWANCE],
  });

  const {
    data: writeContractResult,
    writeAsync: approveAsync,
    error,
  } = useContractWrite(config);

  const { isLoading: isApproving } = useWaitForTransaction({
    hash: writeContractResult ? writeContractResult.hash : undefined,
    onSuccess(data) {
      refetch();
    },
  });

  // If allowance is greater than 0 (approved), immediately finalize
  useEffect(() => {
    if (allowance > 0n) {
      onClick();
    }
  }, [allowance]);

  if (allowance === 0n && approveAsync) {
    return (
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-xl w-full"
        style={{ backgroundColor: '#5100ff' }}
        onClick={async () => {
          await approveAsync();
        }}
      >
        {isApproving ? "Approving..." : "Approve"}
      </button>
    );
  }

  // No need for the "Swap" button since you're auto-finalizing, so return null or another component if needed
  return null;
}