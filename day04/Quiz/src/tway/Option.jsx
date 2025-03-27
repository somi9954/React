import Cabin from "./Cabin";
import Checked from "./Checked";
import Seat from "./Seat";

const Option = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Seat />
      <Cabin />
      <Checked />
    </div>
  );
};

export default Option;
