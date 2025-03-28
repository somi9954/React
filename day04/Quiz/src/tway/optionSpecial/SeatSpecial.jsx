import { PiSeatFill } from "react-icons/pi";

const SeatSpecial = () => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <PiSeatFill />
      <span>프리미엄 플랫 좌석</span>
    </div>
  );
};

export default SeatSpecial;
