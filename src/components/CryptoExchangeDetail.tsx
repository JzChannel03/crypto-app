import { Navigate, useParams } from "react-router-dom";
import { useCrypto } from "../hooks/useCrypto";
import { formatToCurrency } from "../helpers/formatToCurrency";
import { GetCryptoIcon } from "./GetCryptoIcon";
import { UpIcon, DownIcon } from "../assets/icons";
import { useState } from "react";
import { BuyButton } from "./BuyButton";
import { Quantity } from "./Quantity";

function CryptoDetails({
  name,
  value,
  trendIcon,
}: {
  name: string;
  value: number;
  trendIcon: JSX.Element;
}) {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-start gap-2">
        {GetCryptoIcon({
          name,
        })}
      </div>
      <h5 className="text-xl font-bold text-white">{name}</h5>
      <div className="flex flex-row items-center">
        {trendIcon}
        <p className="text-sm text-slate-400">{formatToCurrency(value)} USD</p>
      </div>
    </div>
  );
}

const CryptoExchangeDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const { getById, userBalance, buyCrypto } = useCrypto();

  const { id } = useParams();

  if (!id || Object.keys(getById(id)).length === 0) {
    return <Navigate to="/exchange" replace />;
  }

  console.log(getById(id));

  const { cryptoBalance, name, value, initialValue } = getById(id || "");

  const cost = quantity * value;

  const buttonColor =
    userBalance <= quantity * value
      ? "bg-red-500 hover:bg-red-700"
      : "bg-blue-500 hover:bg-blue-700";

  const trendIcon = value >= initialValue ? <UpIcon /> : <DownIcon />;

  return (
    <section className="w-full flex flex-col justify-between gap-6 rounded-lg">
      <div className="w-full flex flex-row justify-between gap-2">
        <CryptoDetails
          name={name}
          value={value}
          trendIcon={trendIcon}
        ></CryptoDetails>
        <Quantity quantity={quantity} setQuantity={setQuantity}></Quantity>
      </div>

      <BuyButton
        quantity={quantity}
        value={value}
        buttonColor={buttonColor}
        id={id}
        buyCrypto={buyCrypto}
      ></BuyButton>

      <div className="text-gray-400 text-sm">
        <p>
          You have: {cryptoBalance} {name}
        </p>
        <p>
          You will have: {quantity + cryptoBalance} {name}, after buying.
        </p>
        <p>
          Initial value of {name} was {formatToCurrency(initialValue)} USD.
        </p>
        {quantity * value > 1000 && (
          <>
            <p className="font-bold">
              With discount of 10% (Aplicable for this exchange):
            </p>
            <p>
              {formatToCurrency(cost)} - {formatToCurrency(cost * 0.1)} ={" "}
              <span className="font-bold">
                {formatToCurrency(cost * 0.9)} USD
              </span>
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default CryptoExchangeDetail;
