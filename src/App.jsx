import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import MainPage from "./pages/landing";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
