import { useState } from "react";
import "./App.css";

function App() {
  const [CalcDisplay, setCalcDisplay] = useState("");

  const HandleValues = (e) => {
    const value = e.target.value;
    setCalcDisplay((prev) => prev + value);
    console.log(CalcDisplay);
  };

  const result = () => {
    try {
      setCalcDisplay(eval(CalcDisplay).toString());
    } catch (error) {
      setCalcDisplay("Error");
    }
  };

  const Clear = () => {
    setCalcDisplay("");
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 text-warning">Calculator</h1>
      </div>
      <div className="CalcContainer">
        <div className="calculator">
          <div className="display">{CalcDisplay}</div>
          <button onClick={HandleValues} value={"7"}>
            7
          </button>
          <button onClick={HandleValues} value={"7"} value={"8"}>
            8
          </button>
          <button onClick={HandleValues} value={"7"} value={"9"}>
            9
          </button>
          <button onClick={HandleValues} value={"7"} value={"/"}>
            /
          </button>
          <button onClick={HandleValues} value={"7"} value={"4"}>
            4
          </button>
          <button onClick={HandleValues} value={"7"} value={"5"}>
            5
          </button>
          <button onClick={HandleValues} value={"7"} value={"6"}>
            6
          </button>
          <button onClick={HandleValues} value={"7"} value={"*"}>
            *
          </button>
          <button onClick={HandleValues} value={"7"} value={"1"}>
            1
          </button>
          <button onClick={HandleValues} value={"7"} value={"2"}>
            2
          </button>
          <button onClick={HandleValues} value={"7"} value={"3"}>
            3
          </button>
          <button onClick={HandleValues} value={"-"} value={"-"}>
            -
          </button>
          <button onClick={HandleValues} value={"7"} value={"0"}>
            0
          </button>
          <button onClick={HandleValues} value={"7"} value={"."}>
            .
          </button>
          <button onClick={result}>=</button>
          <button onClick={HandleValues} value={"7"} value={"+"}>
            +
          </button>
          <button onClick={Clear} className="text-center">
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
