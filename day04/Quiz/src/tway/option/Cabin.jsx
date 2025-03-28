import { MdLuggage } from "react-icons/md";

const Cabin = (props) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <MdLuggage />
      <span>{props.cabinWeight}KG</span>
    </div>
  );
};

export default Cabin;
