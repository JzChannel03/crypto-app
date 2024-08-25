import { formatToCurrency } from "../helpers/formatToCurrency";
import { useCrypto } from "../hooks/useCrypto";
import OptionsNavigator from "./Navigator";

function HeadTitle() {
  const { userBalance } = useCrypto();

  return (
    <div className="w-full flex flex-row justify-between items-center gap-3">
      <h4 className="h-[15%] text-lg font-bold flex flex-row items-center">
        <span className="text-yellow-400">Crypto</span>
        <span className="text-white">App</span>
      </h4>
      <div className="h-full flex flex-col text-right">
        <h5 className="text-sm font-bold text-slate-400">Balance:</h5>
        <p className="text-lg text-white font-bold">
          {formatToCurrency(userBalance)}
        </p>
      </div>
    </div>
  );
}

export function Head() {
  return (
    <section className="h-[30%] w-full items-center bg-gradient-to-br from-[#191714] to-[#2234AE] flex flex-col gap-3 rounded-b-[40px] shadow-lg p-8">
      <HeadTitle />
      <OptionsNavigator />
      <span className="text-xs text-gray-400 font-bold">
        Updated every 2 seconds
      </span>
    </section>
  );
}
