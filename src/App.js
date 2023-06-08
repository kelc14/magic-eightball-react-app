import React from "react";
import EightBall from "./EightBall";
import answers from "./answers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Magic Eight Ball</h1>
      <EightBall answers={answers} />
    </div>
  );
}

export default App;
