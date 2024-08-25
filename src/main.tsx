import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import CryptoProvider from "./providers/CryptoProvider.tsx";
import { router } from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CryptoProvider>
      <RouterProvider router={router} />
    </CryptoProvider>
  </StrictMode>
);
