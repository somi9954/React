import Item from "./molecules/Item";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Item itemPrice={20000} />
      <Item itemPrice={15000} />
      <Item itemPrice={35000} />
      <Item itemPrice={5000} />
    </div>
  );
}

export default App;