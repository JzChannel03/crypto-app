export interface ICrypto {
  initialValue: number;
  value: number;
  name: string;
  id: string;
  cryptoBalance: number;
  history: number[];
}

export interface ICryptoContext {
  cryptos: Map<string, ICrypto>;
  userBalance: number;
  buyCrypto: (id: string, quantity: number) => void;
  getById: (id: string) => ICrypto;
  getCryptoArray: () => ICrypto[];
  getUserCryptos: () => ICrypto[];
}
