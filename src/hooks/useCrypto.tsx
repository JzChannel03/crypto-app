import { useContext } from "react";
import { ICryptoContext } from "../interfaces/crypto";
import CryptoContext from "../context/CryptoContext";

export const useCrypto = (): ICryptoContext => {
  const context = useContext(CryptoContext);
  if (context === undefined) {
    throw new Error("useCrypto must be used within a CryptoProvider");
  }
  return context;
};
