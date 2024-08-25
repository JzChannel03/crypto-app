import CryptoList from "./CryptoList";
import SalesWithTimer from "./SalesWithTimer";

const Home = () => {
  return (
    <div className="h-[70%] w-full flex flex-col p-4 gap-4 overflow-y-auto">
      <SalesWithTimer />
      <CryptoList></CryptoList>
    </div>
  );
};

export default Home;
