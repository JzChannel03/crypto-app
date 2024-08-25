import { MinusIcon, AddIcon } from "../assets/icons";

export function Quantity({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: (quantity: number) => void;
}) {
  return (
    <div className="w-28 flex flex-col justify-end items-center gap-2">
      <p className="flex flex-row items-center text-2xl font-bold text-white">
        <span className="text-white">{quantity}</span>
        <span className="text-slate-400">x</span>
      </p>
      <div className="flex flex-row justify-start gap-4">
        <button
          className="flex flex-row items-center content-center gap-2 rounded-full bg-yellow-500 hover:bg-yellow-700 duration-200 cursor-pointer p-2 text-base"
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity <= 1}
        >
          <MinusIcon />
        </button>
        <button
          className="flex flex-row items-center content-center gap-2 rounded-full bg-green-500 hover:bg-green-700 duration-200 cursor-pointer p-2 text-base"
          onClick={() => setQuantity(quantity + 1)}
        >
          <AddIcon />
        </button>
      </div>
    </div>
  );
}
