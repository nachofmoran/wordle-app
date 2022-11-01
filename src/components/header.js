import React, { useState, useContext } from "react";
import Alert from "./alert";
import { GameContext } from "../context/game.context";

const Header = () => {
  const [alert, setAlert] = useState(false);
  const { solution } = useContext(GameContext);

  const handleCheat = (e) => {
    e.preventDefault();
    setAlert(true);
  };
  const removeAlert = () => {
    setAlert(false);
  };
  return (
    <div className="header">
      <div className="top">
        <h1>Wordle</h1>
        <button className="cheat-btn" onClick={handleCheat}>
          Cheat
        </button>
      </div>
      <div className="messages">
        {alert && <Alert removeAlert={removeAlert} text={solution} />}
      </div>
    </div>
  );
};

export default Header;
