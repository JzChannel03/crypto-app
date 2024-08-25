import { UpIcon, DownIcon } from "../assets/icons";
import CryptoCard from "./CryptoCard";
import { useCrypto } from "../hooks/useCrypto";

const CryptoList = () => {
  const { getCryptoArray } = useCrypto();

  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {getCryptoArray().map((crypto) => {
        const trendIcon =
          crypto.value >= crypto.initialValue ? <UpIcon /> : <DownIcon />;
        return (
          <CryptoCard
            key={crypto.id}
            name={crypto.name}
            price={crypto.value}
            trendIcon={trendIcon}
          />
        );
      })}
    </section>
  );
};

export default CryptoList;
