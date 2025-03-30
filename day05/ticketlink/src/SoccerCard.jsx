import Button from "./Button";
import Day from "./Day";
import Image from "./Image";
import Vss from "./Vss";

const SoccerCard = (props) => {
  return (
    <div
      style={{
        borderTop: "1px solid #dfdfdf",
        alignItems: "center"
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            gap: "40px",
            padding: "20px",
            alignItems: "center"
          }}
        >
          <Day {...props} />
          <Image {...props} />

          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-around",
              minWidth: "0"
            }}
          >
            <div
              style={{
                minWidth: "130px",
                fontWeight: "bold"
              }}
            >
              <Vss {...props} />
            </div>
            <div
              style={{
                minWidth: "120px",
                fontSize: "12px",
                textAlign: "center",
                whiteSpace: "nowrap"
              }}
            >
              서울월드컵경기장
            </div>
            <div
              style={{
                textAlign: "right"
              }}
            >
              <Button {...props} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoccerCard;
