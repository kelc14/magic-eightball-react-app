import React, { useState } from "react";
import "./EightBall.css";

/** EightBall: shows random answer and, on click, changes answer,
 *
 * Props:
 * - answers: array of {msg, color} objects
 *
 * State:
 * - getResponse: {msg, color} of current answer
 */

const EightBall = ({ answers }) => {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question");
  const getResponse = () => {
    let idx = Math.floor(Math.random() * answers.length);
    setMessage(answers[idx].msg);
    setColor(answers[idx].color);
  };
  const reset = () => {
    setColor("black");
    setMessage("Think of a Question");
  };
  return (
    <div>
      <div
        className="EightBall"
        onClick={getResponse}
        style={{ backgroundColor: color }}
      >
        <p className="EightBall-msg">{message}</p>
      </div>
      <button className="EightBall-btn-reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default EightBall;
