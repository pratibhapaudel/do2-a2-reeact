import React, { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [result, setResult] = useState("");

  function handleClickButton(e) {
    setResult(result.concat(e.target.name));
  }

  function clear() {
    setResult("");
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="calculator">
      <form>
        <input type="text" value={result} />
      </form>

      <div className="keypad">
        <button className="highlight" onClick={clear} id="clear">
          Clear
        </button>
        <button className="highlight" onClick={backspace} id="backspace">
          C
        </button>
        <button name="/" onClick={handleClickButton}>
          &divide;
        </button>
        <button name="7" onClick={handleClickButton}>
          7
        </button>
        <button name="8" onClick={handleClickButton}>
          8
        </button>
        <button name="9" onClick={handleClickButton}>
          9
        </button>
        <button name="*" onClick={handleClickButton}>
          &times;
        </button>
        <button name="4" onClick={handleClickButton}>
          4
        </button>
        <button name="5" onClick={handleClickButton}>
          5
        </button>
        <button name="6" onClick={handleClickButton}>
          6
        </button>
        <button name="-" onClick={handleClickButton}>
          &ndash;
        </button>
        <button name="1" onClick={handleClickButton}>
          1
        </button>
        <button name="2" onClick={handleClickButton}>
          2
        </button>
        <button name="3" onClick={handleClickButton}>
          3
        </button>
        <button name="+" onClick={handleClickButton}>
          +
        </button>
        <button name="0" onClick={handleClickButton}>
          0
        </button>
        <button name="." onClick={handleClickButton}>
          .
        </button>
        <button className="highlight" onClick={calculate} id="result">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
