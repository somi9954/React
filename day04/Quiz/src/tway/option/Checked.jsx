import { FaLuggageCart } from "react-icons/fa";

const Checked = (props) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <FaLuggageCart />
      <span>{props.checkedWeight}</span>
    </div>
  );
};

export default Checked;
