import CabinSpecial from "./CabinSpecial";
import SeatSpecial from "./SeatSpecial";

const OptionSpecial = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <SeatSpecial />
      <CabinSpecial />
    </div>
  );
};

export default OptionSpecial;
