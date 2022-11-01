import "./App.css";
import Header from "./components/header";
import Board from "./components/board";
import Keyboard from "./components/keyboard";
import Loading from "./components/loading";
import Modal from "./components/modal";
import { useState, useEffect, useContext } from "react";
import { GameContext } from "./context/game.context";
import { checkWord, updateColors } from "./utils/game.utils";

const url = "https://random-word-api.herokuapp.com/word?length=5";

function App() {
  const [loading, setLoading] = useState(true);

  let win = false;
  let actualWord = "";

  const { solution, setSolution } = useContext(GameContext);
  const { actualGuess, setActualGuess } = useContext(GameContext);
  const { guessNum, setGuessNum } = useContext(GameContext);
  const { words, setWords } = useContext(GameContext);
  const { setGameState } = useContext(GameContext);
  const { keyboardColors, setKeyboardColors } = useContext(GameContext);
  const { openModal } = useContext(GameContext);

  const fetchWord = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const word = await response.json();
      setLoading(false);
      setSolution(word[0]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const virtualClick = (key) => {
    let character = key.toLowerCase();

    if (character === "delete") {
      actualWord = actualGuess.slice(0, -1);
      setActualGuess(actualWord);
    } else if (character === "enter") {
      if (actualGuess.length === 5) {
        setKeyboardColors(updateColors(keyboardColors, actualGuess, solution));
        if (checkWord(actualGuess, solution)) {
          setGameState(1);
          win = true;
          openModal();
        } else {
          if (guessNum >= 5) {
            setGameState(2);
            openModal();
          }
        }

        setWords({ ...words, [guessNum]: actualGuess });

        actualWord = "";
        setActualGuess(actualWord);

        setGuessNum(guessNum + 1);
      } else {
        console.log("It doesn´t have 5 letters");
      }
    } else {
      if (actualGuess.length < 5) {
        let letter = character;
        actualWord = actualGuess + letter;
        setActualGuess(actualWord);
      }
    }
  };

  useEffect(() => {
    fetchWord();
    setGuessNum(0);
  }, []);

  return (
    <div className="app">
      <Modal win={win} />
      <Header />
      {loading ? <Loading /> : <Board />}
      <Keyboard onClick={virtualClick} />
    </div>
  );
}

export default App;
