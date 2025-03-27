import { MdLuggage } from "react-icons/md";

const Cabin = () => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <MdLuggage />
      <span>10KG</span>
    </div>
  );
};

export default Cabin;
