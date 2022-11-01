import React from "react";
import { useContext } from "react";
import { GameContext } from "../context/game.context";
import "../styles/styles.scss";

const Modal = ({ win }) => {
  const { isModalOpen, closeModal, solution, gameState } =
    useContext(GameContext);
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        {gameState === 1 ? <h2>You Win</h2> : <h2>Oh no!</h2>}
        <h3>solution: {solution}</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          x
        </button>
      </div>
    </div>
  );
};

export default Modal;
