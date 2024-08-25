import { Outlet } from "react-router-dom";

const CryptoExchange = () => {
  return (
    <section className="h-[70%] w-full flex flex-col p-4 gap-10 overflow-y-auto">
      <h1 className="flex flex-col items-center md:items-start justify-center gap-2">
        <span className="text-xs bg-black text-white font-bold p-2 rounded-lg">
          Discount of 10% when buying more than $100
        </span>
        <span className="text-3xl font-bold text-white">Crypto Exchange</span>
      </h1>
      <Outlet />
    </section>
  );
};

export default CryptoExchange;
