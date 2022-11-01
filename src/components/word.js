import React, { useContext } from "react";
import Character from "./character";
import { GameContext } from "../context/game.context";

const Word = ({ word, attempt }) => {
  const wordArray = [];
  let colorArray = ["", "", "", "", ""];
  let color = "grey";
  const { solution, guessNum } = useContext(GameContext);

  let auxString = solution.slice();

  for (let i = 0; i < 5; i++) {
    wordArray.push(word[i]);
  }

  colorArray = wordArray.map((character, index) => {
    if (character === solution[index]) {
      return "*";
    }
    return character;
  });

  colorArray = colorArray.map((character, index) => {
    let found = false;
    for (let i = 0; i < colorArray.length; i++) {
      if (
        auxString[i] === character &&
        colorArray[i] !== "*" &&
        colorArray[i] !== "+"
      ) {
        found = true;
        auxString =
          auxString.substring(0, i) + "+" + auxString.substring(i + 1);
        break;
      }
    }
    if (found) return "+";
    return character;
  });

  return (
    <div className="word">
      {wordArray.map((character, index) => {
        color = "";
        if (guessNum > attempt) {
          if (colorArray[index] === "*") color = "green";
          else if (colorArray[index] === "+") color = "yellow";
          else color = "grey";
        }
        return (
          <Character
            key={index}
            character={character}
            color={color}
            attempt={attempt}
          />
        );
      })}
    </div>
  );
};

export default Word;
