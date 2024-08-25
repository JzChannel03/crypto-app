import { ShopIcon } from "../assets/icons";
import { formatToCurrency } from "../helpers/formatToCurrency";

export function BuyButton({
  buttonColor,
  quantity,
  value,
  buyCrypto,
  id,
}: {
  buttonColor: string;
  quantity: number;
  value: number;
  id: string;
  buyCrypto: (id: string, quantity: number) => void;
}) {
  const cost =
    quantity * value > 1000 ? quantity * value * 0.9 : quantity * value;
  return (
    <div>
      <button
        className={
          quantity <= 0
            ? "hidden"
            : `w-full md:w-fit flex flex-row items-center content-center gap-2 rounded-full ${buttonColor} duration-200 cursor-pointer px-3 py-1 text-base`
        }
        onClick={() => buyCrypto(id, quantity)}
      >
        <ShopIcon />
        Buy for <span className="text-white">{formatToCurrency(cost)} USD</span>
      </button>
    </div>
  );
}
