import { darkTheme, lightTheme, Theme, SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import { WagmiConfig, useAccount } from "wagmi";

export default function Home() {


  const myLightTheme: Theme = {
    ...lightTheme,
    accent: '#FF007A',
    primary: '#000000',
    secondary: '#565A69',
  }

  const myDarkTheme: Theme = {
    ...darkTheme,
    accent: '#0e0e0e',
    primary: '#FFFFFF',
    secondary: '#888D9B',
    container: '#0e0e0e'
  }

  let darkMode = true;
  const UNISWAP_TOKEN_LIST = 'https://tokens.coingecko.com/uniswap/all.json';
  const MEMBOT = '0x9eac760d89805558d1a657b59bed313766e09e61';
  const FEE = '0x1079E06479b037aEEEda9B9D1a2271A6062ce330';
  
  return (
    <div className="scale-125 -mt-20 relative h-[100vh] flex justify-center items-center">
      <div className="Uniswap shadow-none">
        <SwapWidget 
          theme={darkMode ? myDarkTheme : myLightTheme} 
          tokenList={UNISWAP_TOKEN_LIST} 
          convenienceFee={5} 
          convenienceFeeRecipient={FEE} 
          defaultOutputTokenAddress={MEMBOT} 
          brandedFooter={false}
        />
      </div>
    </div>
  );
}
