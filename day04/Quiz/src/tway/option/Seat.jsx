import { PiSeat } from "react-icons/pi";

const Seat = (props) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <PiSeat />
      <span>{props.class} 좌석</span>
    </div>
  );
};

export default Seat;
