import { useEffect, useState } from "react";
import Products from "./Products";

function App() {
  const [products, setProducts] = useState([]);
  const [original, setOriginal] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((v) => {
        setProducts((prev) => {
          const newPrev = [...prev, ...v.products];
          return newPrev;
        });
        setOriginal((prev) => {
          const newPrev = [...prev, ...v.products];
          return newPrev;
        });
      });
  }, []);

  const filterRate = (up) => {
    setProducts((prev) => {
      const newPrev = [...original].filter((v) => v.rating >= up);
      return newPrev;
    });
  };
  return (
    <>
      <button
        onClick={() => {
          filterRate(0);
        }}
      >
        전체 보기
      </button>
      <button
        onClick={() => {
          filterRate(4);
        }}
      >
        4점 이상만 보기
      </button>
      <button
        onClick={() => {
          filterRate(3);
        }}
      >
        3점 이상만 보기
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "100px",
        }}
      >
        {products.map((v) => (
          <Products thumbnail={v.thumbnail} title={v.title} rating={v.rating} />
        ))}
      </div>
    </>
  );
}

export default App;
