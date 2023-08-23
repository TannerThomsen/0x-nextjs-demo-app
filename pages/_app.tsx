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
import Link from 'next/link';

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
  const tabs = [
    { label: 'Leaderboard', href: '/leaderboard' },
    // Add more tabs as needed
  ];

  function Navbar() {
    // Extract the third tab and the remaining tabs
    const thirdTab = tabs[2];
    const remainingTabs = tabs.slice(0, 2);
  
    return (
      <div className="navbar w-full p-3 border-b border-custom-e flex justify-between items-center">
          <div className="flex items-center space-x-4">
          <div className="ml-2.5">
          <a href="/">
              <img src="/memlogo.png" alt="Memswap" className="w-9 h-9 mr-4" />
          </a>
      </div>
  
              {remainingTabs.map((tab, index) => (
              <Link key={index} href={tab.href} className="text-gray-500 hover:text-white font-medium transition" style={{ fontFamily: 'Rubik, sans-serif' }}>
              {tab.label}
          </Link>
          ))}
          </div>
  
          <div className="flex items-center space-x-4">
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
                              className="bg-gray-500 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl mr-2 sm: p-2 py-1.5 px-4 sm: px-2 rounded-xl mr-3"
                              style={{ backgroundColor: '#283148' }}
                          >
                              {isConnected && address ? formatAddress(address) : "Connect Wallet"}
                          </button>
                      );
                  }}
              </ConnectKitButton.Custom>
          </div>
      </div>
    );
  }
  return (
    <div>
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <Navbar />
          <div style={{ padding: "20px", position: "relative" }}>
            {/* This is where the main page content will render */}
            <Component {...pageProps} />
          </div>
        </ConnectKitProvider>
      </WagmiConfig>
    </div>
  );
}