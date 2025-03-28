import Option from "./Option";
import Price from "./Price";
import Title from "./Title";

const CostCard = (num ) => {
  console.log("num",num)
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "250px",
          display: "flex",
          flexDirection: "column",
          border: "1px solid #efefef"
        }}
      >
        <Title  costName={num}/>
        <Option />
        <Price />
      </div>
    </div>
  );
};

export default CostCard;
