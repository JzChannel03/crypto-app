import { Link, useLocation } from "react-router-dom";
import { GraphsIcon, HomeIcon, ListIcon, ShopIcon } from "../assets/icons";

const OptionsNavigator = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="h-[70%] w-full flex flex-row items-center justify-center gap-2 text-white">
      <Link to="/graphics">
        <div className="flex flex-row justify-center items-center rounded-full px-6 py-2 text-xs sm:text-xl gap-2 hover:bg-black duration-200 cursor-pointer">
          <GraphsIcon />
          <h5>Graphics</h5>
        </div>
      </Link>
      {pathname !== "/home" ? (
        <Link to="/home">
          <div className="flex w-16 h-16 flex-row justify-center items-center bg-blue-500 hover:bg-blue-700 duration-200 cursor-pointer rounded-full p-6 text-xl">
            <HomeIcon />
            <h6 className="text-xs text-white">Home</h6>
          </div>
        </Link>
      ) : (
        <Link to="/exchange">
          <div className="flex w-16 h-16 flex-row justify-center items-center bg-blue-500 hover:bg-blue-700 duration-200 cursor-pointer rounded-full p-6 text-xl">
            <ShopIcon />
            <h6 className="text-xs text-white">Exchange</h6>
          </div>
        </Link>
      )}
      <Link to={"/my"}>
        <div className="flex flex-row justify-center items-center  rounded-full px-6 py-2 text-xs sm:text-xl gap-2 hover:bg-black duration-200 cursor-pointer">
          <ListIcon />
          <h5>MyVault</h5>
        </div>
      </Link>
    </div>
  );
};

export default OptionsNavigator;
