import React from "react";
import { useContext } from "react";
import { GameContext } from "../context/game.context";

const keyboardKeys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"],
];

const Keyboard = ({ onClick }) => {
  const { gameState, keyboardColors } = useContext(GameContext);

  if (gameState === 0) {
    return (
      <div className="keyboard">
        {keyboardKeys.map((keyboardRow, rowIndex) => {
          return (
            <div key={rowIndex} className="keyboard-row">
              {keyboardRow.map((key, keyIndex) => {
                return (
                  <button
                    key={keyIndex}
                    className={keyboardColors[key.toLowerCase()]}
                    onClick={() => onClick(key)}
                  >
                    {key}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
  return <></>;
};

export default Keyboard;
