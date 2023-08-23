import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import { useEffect, useState } from "react";
import {
  useAccount,
  erc20ABI,
  useContractRead,
  useSendTransaction,
  usePrepareSendTransaction,
  type Address,
} from "wagmi";
import { SwapWidget } from "@uniswap/widgets";

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

function formatAddress(address: string): string {
  if (!address) return "";
  const start = address.substring(0, 6); // "0x" + first 4 characters
  const end = address.substring(address.length - 3);
  return `${start}...${end}`;
}

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const [showOrder, setShowOrder] = useState(false); // Added state for overlay control

  useEffect(() => setMounted(true), []);

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

  return (
    <div>
      <WagmiConfig config={config}>
        
        <ConnectKitProvider>
          <Navbar />
          <div style={{ padding: "20px", position: "relative" }}>
            <SwapWidget/>
          </div>
        </ConnectKitProvider>
      </WagmiConfig>
    </div>
  );
}