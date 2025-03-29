import { useState } from "react";
import "./App.css";
import HeaderHome from "./pages/HomePage";
import MainBanner from "./components/mainBanner";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
