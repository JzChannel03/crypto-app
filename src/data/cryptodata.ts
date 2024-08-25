import { ICrypto } from "../interfaces/crypto";

export const cryptoInfoList = new Map<string, ICrypto>(
  Object.entries({
    bitcoin: {
      id: "bitcoin",
      name: "Bitcoin",
      value: 53427.23,
      initialValue: 53427.23,
      cryptoBalance: 0,
      history: [53427.23],
    },
    ethereum: {
      id: "ethereum",
      name: "Ethereum",
      value: 2314.65,
      initialValue: 2314.65,
      cryptoBalance: 0,
      history: [2314.65],
    },
    cardano: {
      id: "cardano",
      name: "Cardano",
      value: 0.3712,
      initialValue: 0.3712,
      cryptoBalance: 0,
      history: [0.3712],
    },
    solana: {
      id: "solana",
      name: "Solana",
      value: 149.49,
      initialValue: 149.49,
      cryptoBalance: 0,
      history: [149.49],
    },
  })
);
