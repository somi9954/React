import { useState } from "react";
import Counter from "../atom/Counter";
import Price from "../atom/Price";
import Size from "../atom/Size";

const Item = (props) => {
  const [num, setNum] = useState(1);
  return (
    <div style={{ borderRadius: "10px", padding: "20px", backgroundColor: "#f5f5f5", display: "flex", flexDirection: "column", gap: "10px" }}>
      <Size size={"small"} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Counter num={num} setNum={setNum} />
        <Price num={num} price={props.itemPrice} />
      </div>
    </div>
  );
};

export default Item;