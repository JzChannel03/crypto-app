import { Link } from "react-router-dom";
import { ShopIcon } from "../assets/icons";
import { formatToCurrency } from "../helpers/formatToCurrency";
import { GetCryptoIcon } from "./GetCryptoIcon";

const ExchangeCard = ({
  name,
  price,
  id,
}: {
  name: string;
  price: number;
  id: string;
}) => {
  return (
    <section className="w-full flex flex-row justify-center gap-2 rounded-lg bg-gradient-to-br from-[#191714] to-[#2234AE] p-4 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="w-4/6 flex flex-col justify-center gap-2">
        <div className="flex flex-row justify-start gap-2">
          {GetCryptoIcon({ name })}
        </div>
        <h5 className="text-xl font-bold text-white">{name}</h5>
        <div className="flex flex-row justify-between gap-2">
          <p className="text-sm text-slate-400">
            {formatToCurrency(price)} USD
          </p>
        </div>
      </div>
      <div className="w-2/6 flex flex-row items-center justify-center gap-2">
        <Link to={`/exchange/${id}`}>
          <button className="flex flex-row items-center justify-center gap-2 rounded-full bg-blue-500 hover:bg-blue-700 duration-200 cursor-pointer px-3 py-1 text-base">
            <ShopIcon />
            Buy
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ExchangeCard;
