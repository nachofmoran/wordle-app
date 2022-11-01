import { createContext, useState } from "react";

export const GameContext = createContext({
  solution: null,
  setSolution: () => null,
});

export const GameProvider = ({ children }) => {
  const [solution, setSolution] = useState("");
  const [actualGuess, setActualGuess] = useState("");
  const [guessNum, setGuessNum] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameState, setGameState] = useState(0);
  const [keyboardColors, setKeyboardColors] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
    j: "",
    k: "",
    l: "",
    m: "",
    n: "",
    o: "",
    p: "",
    q: "",
    r: "",
    s: "",
    t: "",
    u: "",
    v: "",
    w: "",
    x: "",
    y: "",
    z: "",
  });
  const [words, setWords] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const value = {
    solution,
    setSolution,
    actualGuess,
    setActualGuess,
    words,
    setWords,
    guessNum,
    setGuessNum,
    gameState,
    setGameState,
    openModal,
    closeModal,
    isModalOpen,
    keyboardColors,
    setKeyboardColors,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
