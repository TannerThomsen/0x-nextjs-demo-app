import {  darkTheme, lightTheme, Theme, SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import { WagmiConfig, useAccount } from "wagmi";
export default function Home() {


  const UNISWAP_TOKEN_LIST = 'https://tokens.coingecko.com/uniswap/all.json'

  const MEMBOT = '0x9eac760d89805558d1a657b59bed313766e09e61'
  const FEE = '0x1079E06479b037aEEEda9B9D1a2271A6062ce330'
  const myLightTheme: Theme = {
    ...lightTheme, // Extend the lightTheme
    accent: '#FF007A',
    primary: '#000000',
    secondary: '#565A69',
  }
  const myDarkTheme: Theme = {
    ...darkTheme, // Extend the darkTheme
    accent: '#2172E5',
    primary: '#FFFFFF',
    secondary: '#888D9B',
  }
  let darkMode = true;
  function App() {
  
    <div className="Uniswap">
      <SwapWidget theme={darkMode ? darkTheme : lightTheme} convenienceFee={1} convenienceFeeRecipient={FEE} tokenList={UNISWAP_TOKEN_LIST} defaultOutputTokenAddress={MEMBOT} brandedFooter={false} />
    </div>
  }
  
return (
  <div className="scale-125 -mt-20 relative h-[100vh] flex justify-center items-center">
     <div className="Uniswap">
      <SwapWidget theme={darkMode ? darkTheme : lightTheme} tokenList= {UNISWAP_TOKEN_LIST} convenienceFee={1} convenienceFeeRecipient={FEE} defaultOutputTokenAddress={MEMBOT} brandedFooter={false}/>
    </div>
  </div>
);
}
