export const topCoins = [
  {
    rank: 1,
    symbol: "BTC",
    name: "Bitcoin",
    price: "91,842.22",
    change: 2.83,
    volume: "$38.2B",
    marketCap: "$1.81T",
    about:
      "Bitcoin is a decentralized digital currency designed for secure peer-to-peer payments.",
    supply: "19.8M BTC",
  },
  {
    rank: 2,
    symbol: "ETH",
    name: "Ethereum",
    price: "4,901.39",
    change: 1.64,
    volume: "$17.6B",
    marketCap: "$590B",
    about:
      "Ethereum is a blockchain platform for decentralized apps and smart contracts.",
    supply: "120.3M ETH",
  },
  {
    rank: 3,
    symbol: "SOL",
    name: "Solana",
    price: "214.55",
    change: -0.72,
    volume: "$4.8B",
    marketCap: "$101B",
    about:
      "Solana is a high-throughput blockchain known for fast and low-cost transactions.",
    supply: "466.4M SOL",
  },
  {
    rank: 4,
    symbol: "XRP",
    name: "XRP",
    price: "2.63",
    change: 3.11,
    volume: "$2.1B",
    marketCap: "$149B",
    about:
      "XRP is a digital asset built for efficient cross-border payments and liquidity.",
    supply: "55.9B XRP",
  },
];

export function toAssetPath(symbol) {
  return `/assets/${symbol.toLowerCase()}`;
}

export function findCoinBySymbol(symbolParam) {
  return topCoins.find((coin) => coin.symbol.toLowerCase() === symbolParam?.toLowerCase());
}

export const learnTracks = [
  {
    title: "Crypto basics",
    level: "Beginner",
    summary: "Understand wallets, blockchains, and how transactions settle.",
  },
  {
    title: "Onchain security",
    level: "Intermediate",
    summary: "Learn practical steps to avoid phishing and protect seed phrases.",
  },
  {
    title: "DeFi strategies",
    level: "Advanced",
    summary: "Explore lending, staking, and yield mechanics with risk awareness.",
  },
];



