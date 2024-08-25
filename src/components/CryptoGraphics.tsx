import { useCrypto } from "../hooks/useCrypto";
import CryptoGraphicCards from "./CryptoGraphicCards";

const CryptoGraphics = () => {
  const { getCryptoArray } = useCrypto();

  return (
    <div className="w-full h-[70%] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {getCryptoArray().map((crypto) => {
        return (
          <CryptoGraphicCards
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

export default CryptoGraphics;
