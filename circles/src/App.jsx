import Greencircle from "./Greencircle";
import RedCircle from "./Redcircle";  
import YellowCircle from "./Yellowcircle"; 

function App() {
  return (
    <div style={{display:"flex", marginRight: "50px"}}>
      <Greencircle></Greencircle>
      <RedCircle></RedCircle>  
      <YellowCircle></YellowCircle>  
    </div>
  );
}

export default App;
