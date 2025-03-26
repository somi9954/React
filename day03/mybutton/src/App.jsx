import Card from "./Card";

function App() {
  return (
    <div style={{display:"flex", gap: "5px"}}>
     <Card bg={"#5d7d26"} name={"Kia Green"}></Card>
     <Card bg={"#4c5b35"} name={"Kia Green_dark"}></Card>
     <Card bg={"#5d7d2b"} name={"Kia Green_variant"}></Card>
    </div>
  );
}

export default App;
