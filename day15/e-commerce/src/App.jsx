import { useEffect, useState } from "react";
import Products from "./Products";
import Filter from "./Filter";

function App() {
  const [products, setProducts] = useState([]);
  const [original, setOriginal] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
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

  const filterPrice = (up) => {
    setProducts((prev) => {
      const newPrev = [...original].filter((v) => v.price >= up);
      return newPrev;
    });
  };

  const filterStock= (up) => {
    setProducts((prev) => {
      const newPrev = [...original].filter((v) => v.stock >= up);
      return newPrev;
    });
  };
  

  return (
    <div style={{ display: "flex", gap: 50, paddingLeft: 10 }}>

      <Filter 
        onFilterStock={filterStock}
        onFilterPrice={filterPrice}
        onFilterRate={filterRate}
        onReset={() => setProducts(original)}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 100,
          paddingBottom: 50
        }}
      >
        {products.map(v => (
          <Products
            key={v.id}
            thumbnail={v.thumbnail}
            title={v.title}
            price={v.price}
            rating={v.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
