import {
  BitcoinIcon,
  EthereumIcon,
  CardanoIcon,
  SolanaIcon,
} from "../assets/icons";

export const GetCryptoIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "Bitcoin":
      return <BitcoinIcon />;
    case "Ethereum":
      return <EthereumIcon />;
    case "Cardano":
      return <CardanoIcon />;
    case "Solana":
      return <SolanaIcon />;
    default:
      return null;
  }
};
