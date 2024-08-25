import { useCrypto } from "../hooks/useCrypto";
import ExchangeCard from "./ExchangeCard";

const ExchangeList = () => {
  const { getCryptoArray } = useCrypto();

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {getCryptoArray().map((crypto) => {
        return (
          <ExchangeCard
            key={crypto.id}
            name={crypto.name}
            price={crypto.value}
            id={crypto.id}
          />
        );
      })}
    </div>
  );
};

export default ExchangeList;
