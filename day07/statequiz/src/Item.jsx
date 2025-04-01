import { useState } from "react";
import Price from "./Price";
import Counter from "./Counter";

const Items = () => {
  const [num, setNum] = useState(1);
  return (
    <div>
      <Counter num={num} setNum={setNum} />
      <div>
        <Price price={50000} num={num} />
      </div>
    </div>
  );
};

export default Items;
