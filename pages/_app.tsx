import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import { useState } from "react";
import {
  useAccount,
  erc20ABI,
  useContractRead,
  useSendTransaction,
  usePrepareSendTransaction,
  type Address,
} from "wagmi";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    walletConnectProjectId: "a2bfdd4ef403e16c1f3e28010134096c",

    // Required
    appName: "Memswap",

    // Optional
    appDescription: "Memswap App",
  })
);
import { darkTheme, lightTheme, Theme, SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
function formatAddress(address: string): string {
  if (!address) return "";
  const start = address.substring(0, 6); // "0x" + first 4 characters
  const end = address.substring(address.length - 3);
  return `${start}...${end}`;
}

export default function App({ Component, pageProps }: AppProps) {
  const [showOrder, setShowOrder] = useState(false); // Added state for overlay control


  function Navbar() {
    return (
      <div className="navbar w-full p-3 border-b border-custom-e flex justify-between items-center">
        <div className="ml-5">
          <img src="/memlogo.png" alt="Memswap" className="w-9 h-9" />
        </div>
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
                onClick={isConnected ? () => setShowOrder(true) : show}
                type="button"
                className="bg-gray-500 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl mr-5"
                style={{ backgroundColor: '#283148' }}
              >
                {isConnected && address ? formatAddress(address) : "Connect Wallet"}
              </button>
            );
          }}
        </ConnectKitButton.Custom>
      </div>
    );
  }
  const myLightTheme: Theme = {
    ...lightTheme,
    accent: '#FF007A',
    primary: '#000000',
    secondary: '#565A69',
  }

  const myDarkTheme: Theme = {
    ...darkTheme,
    primary: '#FFFFFF',
    secondary: '#888D9B',
    interactive: "#0e0e0e",
    fontFamily: '"Rubik"',
    container: '#0e0e0e',
    module: "#141316",
    accent: "#5100ff",
  }

  let darkMode = true;
  const UNISWAP_TOKEN_LIST = 'https://tokens.coingecko.com/uniswap/all.json';
  const MEMBOT = '0x9eac760d89805558d1a657b59bed313766e09e61';
  const FEE = '0x1079E06479b037aEEEda9B9D1a2271A6062ce330';
  
  return (
    <div>
      <WagmiConfig config={config}>
        
        <ConnectKitProvider>
          <Navbar />
          <div style={{ padding: "20px", position: "relative" }}>
          <div className="scale-125 -mt-20 relative h-[100vh] flex justify-center items-center">
            <div className="uniswap p-4">
              <SwapWidget 
                theme={darkMode ? myDarkTheme : myLightTheme} 
                tokenList={UNISWAP_TOKEN_LIST} 
                convenienceFee={1} 
                convenienceFeeRecipient={FEE} 
                defaultOutputTokenAddress={MEMBOT} 
                brandedFooter={false}
                
              />
            </div>
          </div>
          </div>
        </ConnectKitProvider>
      </WagmiConfig>
    </div>
  );
}