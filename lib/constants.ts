import type { Address } from "wagmi";

export const MAX_ALLOWANCE =
  115792089237316195423570985008687907853269984665640564039457584007913129639935n;

export const exchangeProxy = "0xdef1c0ded9bec7f1a1670819833240f027b25eff";

/* type Token = {
  address: Address;
}; */

interface Token {
  name: string;
  address: Address;
  symbol: string;
  decimals: number;
  chainId: number;
  logoURI: string;
}

export const POLYGON_TOKENS: Token[] = [
  {
    chainId: 1,
    name: "Wrapped ETH",
    symbol: "WETH",
    decimals: 18,
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", //WETH
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
  },
  {
    chainId: 1,
    name: "Dai Stablecoin",
    symbol: "DAI",
    decimals: 18,
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
  },
  {
    chainId: 1,
    name: "Membot",
    symbol: "MEMBOT",
    decimals: 18,
    address: "0x9eac760d89805558d1a657b59bed313766e09e61",
    logoURI: "https://cdn.discordapp.com/attachments/1095769891275034655/1143070440441524224/Untitled_design_-_2023-08-14T155139.508.png",
  },
];

export const POLYGON_TOKENS_BY_SYMBOL: Record<string, Token> = {
  weth: {
    chainId: 1,
    name: "Wrapped ETH",
    symbol: "WETH",
    decimals: 18,
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
  },
  dai: {
    chainId: 1,
    name: "Dai Stablecoin",
    symbol: "DAI",
    decimals: 18,
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
  },
  membot: {
    chainId: 1,
    name: "Membot",
    symbol: "MEMBOT",
    decimals: 18,
    address: "0x9eac760d89805558d1a657b59bed313766e09e61",
    logoURI: "https://cdn.discordapp.com/attachments/1095769891275034655/1143070440441524224/Untitled_design_-_2023-08-14T155139.508.png",
  },
};

export const POLYGON_TOKENS_BY_ADDRESS: Record<string, Token> = {
  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": {
    chainId: 1,
    name: "Wrapped ETH",
    symbol: "WETH",
    decimals: 18,
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    logoURI:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png",
  },
  "0x6b175474e89094c44da98b954eedeac495271d0f": {
    chainId: 1,
    name: "DAI Stablecoin",
    symbol: "DAI",
    decimals: 18,
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
  },
  "0x9eac760d89805558d1a657b59bed313766e09e61": {
    chainId: 1,
    name: "Membot",
    symbol: "MEMBOT",
    decimals: 18,
    address: "0x9eac760d89805558d1a657b59bed313766e09e61",
    logoURI: "https://cdn.discordapp.com/attachments/1095769891275034655/1143070440441524224/Untitled_design_-_2023-08-14T155139.508.png",
  },
};
