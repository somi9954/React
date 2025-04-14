import { useEffect, useState } from "react";
import Food from "./Food";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((v) => {
        setData((prev) => {
          const newPrev = [...prev, ...v.recipes];
          return newPrev;
        });
      });
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "100px"
      }}
    >
      {data.map((v) => (
        <Food image={v.image} name={v.name} />
      ))}
    </div>
  );
}

export default App;
