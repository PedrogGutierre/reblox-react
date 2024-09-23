import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
<<<<<<< HEAD

const App = () => {
=======
import Chat from "./components/Chat";

const App = () => {

>>>>>>> chatbot
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
<<<<<<< HEAD
=======
      <Chat />
>>>>>>> chatbot
    </>
  );
};

export default App;
