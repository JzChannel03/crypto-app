import { createContext } from "react";
import { ICryptoContext } from "../interfaces/crypto";

const CryptoContext = createContext<ICryptoContext>({} as ICryptoContext);

export default CryptoContext;
