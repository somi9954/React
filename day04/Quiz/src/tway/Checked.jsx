import { FaLuggageCart } from "react-icons/fa";

const Checked = () => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <FaLuggageCart />
      <span>없음</span>
    </div>
  );
};

export default Checked;
