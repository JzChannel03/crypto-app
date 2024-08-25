import { useState, useEffect } from "react";
import CryptoContext from "../context/CryptoContext";
import { cryptoInfoList } from "../data/cryptodata";
import { ICrypto } from "../interfaces/crypto";
import { calculateFluctuation } from "../helpers/calculateFluctuacion";

const initialBalance = 12528.35;

const CryptoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cryptos, setCryptos] = useState<Map<string, ICrypto>>(cryptoInfoList);
  const [userBalance, setUserBalance] = useState<number>(initialBalance);

  useEffect(() => {
    const interval = setInterval(() => {
      setCryptos((prevCryptos) => {
        const updatedCryptos = new Map<string, ICrypto>();

        prevCryptos.forEach((crypto, key) => {
          const fluctuation = calculateFluctuation(crypto.value);
          const newValue = crypto.value + fluctuation;

          updatedCryptos.set(key, {
            ...crypto,
            value: newValue,
            history: [...crypto.history, newValue],
          });
        });

        return updatedCryptos;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getById = (id: string) => {
    return cryptos.get(id) || ({} as ICrypto);
  };

  const getCryptoArray = () => Array.from(cryptos.values());

  const buyCrypto = (id: string, quantity: number) => {
    const crypto = getById(id);

    let cost = quantity * crypto.value;

    if (userBalance < cost) {
      alert("You don't have enough money");
      return;
    }

    if (cost > 1000) cost *= 0.9;

    console.log(cost, quantity * crypto.value);

    setUserBalance(userBalance - cost);
    addCryptoBalance(id, crypto.cryptoBalance + quantity);
    alert(`Bought ${quantity} ${crypto.name}`);
  };

  const addCryptoBalance = (id: string, cryptoBalance: number) => {
    setCryptos((prevCryptos) => {
      const updatedCryptos = new Map(prevCryptos);
      const crypto = updatedCryptos.get(id);

      if (crypto) {
        updatedCryptos.set(id, { ...crypto, cryptoBalance });
      }

      return updatedCryptos;
    });
  };

  const getUserCryptos = () =>
    Array.from(cryptos.values()).filter((crypto) => crypto.cryptoBalance > 0);

  return (
    <CryptoContext.Provider
      value={{
        cryptos,
        userBalance,
        buyCrypto,
        getById,
        getCryptoArray,
        getUserCryptos,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoProvider;
