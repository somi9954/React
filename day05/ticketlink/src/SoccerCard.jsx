import Button from "./Button";
import Day from "./Day";
import Vss from "./Vss";
import Image from "./Image";

const SoccerCard = (props) => {
  return (
    <div
      style={{
        borderTop: "1px solid #dfdfdf",
        borderBottom: "1px solid #dfdfdf",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <Day {...props} />
          <Image {...props} />
          <Vss {...props} />
          <span style={{ alignContent: "center" }}>서울월드컵경기장</span>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default SoccerCard;
