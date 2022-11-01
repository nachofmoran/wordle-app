import React from "react";

const Character = ({ character, color }) => {
  return <div className={`character ${color}`}>{character}</div>;
};

export default Character;
