import Option from "./Title";
import Price from "./Price";
import Title from "./Title";

const CostCard = () => {
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
        <Title />
        <Option />
        <Price />
      </div>
    </div>
  );
};

export default CostCard;
