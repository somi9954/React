import Price from "./Price";
import Title from "./Title";
import OptionSpecial from "./optionSpecial/OptionSpecial";
const ClassSpecialType = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #efefef",
      }}
    >
      <Title {...props} />
      <OptionSpecial {...props} />
      <Price {...props} />
    </div>
  );
};

export default ClassSpecialType;
