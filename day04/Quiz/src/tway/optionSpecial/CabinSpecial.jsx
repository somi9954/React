import { BsFillLuggageFill } from "react-icons/bs";

const CabinSpecial = () => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <BsFillLuggageFill />
      <span>10KG * 2pc</span>
    </div>
  );
};

export default CabinSpecial;
