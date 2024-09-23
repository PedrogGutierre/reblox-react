import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chat from "./components/Chat";

const App = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Chat />
    </>
  );
};

export default App;
