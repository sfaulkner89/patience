import "./App.css";
import Bagel from "./components/Bagel/Bagel";
import { useState } from "react";
import bagel from "./assets/bagel.png";

function App() {
  const [amountOfBagels, setAmountOfBagels] = useState(1);

  let bagels = Array.from(Array(amountOfBagels).keys());

  const clickHandler = () => {
    if (amountOfBagels > 10) {
      setAmountOfBagels(amountOfBagels.shift());
    }
    setAmountOfBagels(amountOfBagels + 1);
  };

  return (
    <div onClick={clickHandler} style={{ cursor: "pointer" }}>
      {bagels.map((bagel, i) => {
        return <Bagel id={i} bagelID={i - 1} />;
      })}
      <div className="subHolder">
        <h1>Patience Pizza Bagels</h1>
        <h2>subscribe to get updates:</h2>
        <input className="bagelInput" placeholder="email address"></input>
        <button
          className="bagelButton"
          onClick={() => setAmountOfBagels(amountOfBagels + 1)}
          title="More Bagels!"
        >
          <img src={bagel} className="bagelicon" />
        </button>
      </div>
    </div>
  );
}

export default App;
