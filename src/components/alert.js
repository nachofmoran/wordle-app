import React, { useEffect } from "react";

const Alert = ({ removeAlert, text }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 1500);
  });
  return (
    <div className="alert">
      <p>{text}</p>
    </div>
  );
};

export default Alert;
