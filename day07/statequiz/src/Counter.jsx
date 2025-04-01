import { useState } from "react";

const Counter = (props) => {
  const buttonSytle = { padding: "10px", border: "none", fontWeight: "bord" };

  return (
    <div
      style={{
        border: "1px solid #efefef",
        borderRadius: "2px",
        width: "fit-content",
        display: "flex",
      }}
    >
      <button
        style={{ ...buttonSytle, color: props.num == 1 ? "#efefefe" : "black" }}
        onClick={() => {
          props.setNum((prev) => (prev == 1 ? 1 : prev - 1));
        }}
      >
        -
      </button>
      <span>{props.num}</span>
      <button
        style={{ buttonSytle }}
        onClick={() => {
          props.setNum((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
