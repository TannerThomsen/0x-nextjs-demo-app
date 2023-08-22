import { useState } from "react";
import PriceView from "./Price";
import QuoteView from "./Quote";
import type { PriceResponse } from "./api/types";
import { useAccount } from "wagmi";

export default function Home() {
  const [tradeDirection, setTradeDirection] = useState("sell");
  const [finalize, setFinalize] = useState(false);
  const [price, setPrice] = useState<PriceResponse | undefined>();
  const [quote, setQuote] = useState();
  const { address } = useAccount();
  const [userBalance, setUserBalance] = useState<string>("0");

  return (
    <main className="flex items-center justify-center" style={{ height: 'calc(100vh - 96px)' }}>
      <div className="relative rounded-3xl w-9/10 mx-auto transform border border-custom-e sm:scale-110 md:scale-115 lg:scale-125" style={{ backgroundColor: '#0e0e0e' }}>
        <div className="component-wrapper flex flex-col justify-between h-full">
          <PriceView
            className="mt-0" // to ensure it sticks to the top
            takerAddress={address}
            price={price}
            setPrice={setPrice}
            userBalance={userBalance}
            setFinalize={setFinalize}
          />
          
          {/* Always display QuoteView */}
          <div className="pl-4 pr-4 ">
            <QuoteView
              takerAddress={address}
              price={price}
              quote={quote}
              setQuote={setQuote}
              userBalance={userBalance} 
            />
          </div>
        </div>
      </div>
    </main>
  );
}
