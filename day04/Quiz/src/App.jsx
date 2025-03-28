import CostCard from "./tway/Costcard";


function App() {
  return (
    <div style={{display:"flex"}}>
      {Array(4)
        .fill(0)
        .map((v, i) => {
          return <CostCard num={i} />;
        })}
    </div>
  );

}

export default App;
