import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import CryptoExchange from "./components/CryptoExchange";
import CryptoExchangeDetail from "./components/CryptoExchangeDetail";
import ExchangeList from "./components/ExchangeList";
import Home from "./components/Home";
import MyVault from "./components/MyVault";
import CryptoGraphics from "./components/CryptoGraphics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "exchange",
        element: <CryptoExchange />,
        children: [
          {
            path: "",
            element: <ExchangeList />,
          },
          {
            path: ":id",
            element: <CryptoExchangeDetail />,
          },
        ],
      },
      {
        path: "my",
        element: <MyVault />,
      },
      {
        path: "graphics",
        element: <CryptoGraphics />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home" replace />,
  },
]);
