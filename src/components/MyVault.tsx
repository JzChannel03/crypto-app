import { formatToCurrency } from "../helpers/formatToCurrency";
import { useCrypto } from "../hooks/useCrypto";
import { GetCryptoIcon } from "./GetCryptoIcon";

const MyVault = () => {
  const { getUserCryptos } = useCrypto();
  const cryptoList = getUserCryptos();
  return (
    <section className="h-[70%] w-full flex flex-col p-4 gap-10 overflow-y-auto">
      <h1 className="text-3xl font-bold text-white">My Vault</h1>
      {cryptoList.length === 0 ? (
        <p className="text-center text-lg text-white">
          You don't have any cryptos in your vault.
        </p>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
          {cryptoList.map(({ name, cryptoBalance, value }) => {
            return (
              <section className="flex flex-col justify-center gap-2">
                <div className="w-full flex flex-row justify-between items-center gap-2 rounded-lg bg-gradient-to-br from-[#191714] to-[#2234AE] p-4 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                  <div className="w-5/12 md:2/6 flex flex-col justify-center gap-2">
                    <div className="flex flex-row justify-start gap-2">
                      {GetCryptoIcon({ name })}
                    </div>
                    <h5 className="text-xl font-bold text-white">{name}</h5>
                  </div>
                  <div className="w-7/12 md:4/6 h-fit bg-white text-black flex flex-row items-center justify-center gap-2 rounded-full px-2 py-2 text-sm font-bold">
                    You have {cryptoBalance} {name}
                  </div>
                </div>
                <span className="text-sm text-slate-400">
                  You will have {formatToCurrency(cryptoBalance * value)} USD if
                  you sell it.
                </span>
              </section>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default MyVault;
