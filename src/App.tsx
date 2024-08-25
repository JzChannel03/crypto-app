import { Head } from "./components/Head";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <main className="w-screen h-screen flex flex-col bg-blue-950 gap-4 select-none">
      <Head />
      <Outlet />
    </main>
  );
};

export default App;
