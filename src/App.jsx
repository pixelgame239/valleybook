import { useState } from "react";
import "./App.css";
import HeaderHome from "./homePage";
import MainBanner from "./mainBanner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeaderHome />
      <MainBanner />
    </div>
  );
}

export default App;
