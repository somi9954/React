import Cabin from "./Cabin";
import Checked from "./Checked";
import Seat from "./Seat";

const Option = (props) => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Seat class={props.class} />
      <Cabin cabinWeight={props.cabinWeight} />
      <Checked checkedWeight={props.checkedWeight} />
    </div>
  );
};

export default Option;
