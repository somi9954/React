import Address from "../atom/Address";
import Clock from "../atom/Clock";
import Option from "../atom/Option";
import Status from "../atom/Status";

const Card = (props) => {
  const cardObj = {
    confirmed: "#F5FDEB",
    completed: "#F2F4F6",
    need: "#FFF5F6",
  };

  return (
    <div
      style={{
        backgroundColor: cardObj[props.status],
        width: "320px",
        height: "160px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "12px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Clock clock={props.clock} />
        <Status status={props.status} />
      </div>
      <Address address={props.address} />
      <div style={{ display: "flex", gap: "5px" }}>
        {props.options.map((v) => (
          <Option status={props.status} contents={v} />
        ))}
      </div>
    </div>
  );
};

export default Card;