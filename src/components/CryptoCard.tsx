import { formatToCurrency } from "../helpers/formatToCurrency";
import { GetCryptoIcon } from "./GetCryptoIcon";

const CryptoCard = ({
  name,
  price,
  trendIcon,
}: {
  name: string;
  price: number;
  trendIcon: JSX.Element;
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#191714] to-[#2234AE] p-4 shadow-lg">
      <div className="flex flex-row items-center justify-center gap-2">
        {GetCryptoIcon({ name })}
      </div>
      <h5 className="text-xl font-bold text-white">{name}</h5>
      <div className="flex flex-row items-center justify-between gap-2">
        {trendIcon}
        <p className="text-sm text-slate-400">{formatToCurrency(price)} USD</p>
      </div>
    </div>
  );
};

export default CryptoCard;
