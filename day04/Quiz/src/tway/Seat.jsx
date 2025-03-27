import { PiSeat } from "react-icons/pi";

const Seat = () => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <PiSeat />
      <span>이코노미 좌석</span>
    </div>
  );
};

export default Seat;
