import React from "react";
import Word from "./word";
import { useContext } from "react";
import { GameContext } from "../context/game.context";

const Board = () => {
  const { actualGuess, words, guessNum } = useContext(GameContext);

  return (
    <div>
      <Word word={guessNum === 0 ? actualGuess : words[0]} attempt={0} />
      <Word word={guessNum === 1 ? actualGuess : words[1]} attempt={1} />
      <Word word={guessNum === 2 ? actualGuess : words[2]} attempt={2} />
      <Word word={guessNum === 3 ? actualGuess : words[3]} attempt={3} />
      <Word word={guessNum === 4 ? actualGuess : words[4]} attempt={4} />
      <Word word={guessNum === 5 ? actualGuess : words[5]} attempt={5} />
    </div>
  );
};

export default Board;
