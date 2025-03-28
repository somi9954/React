import Option from "./option/Option";
import Price from "./Price";
import Title from "./Title";

const ClassType = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #efefef",
      }}
    >
      <Title {...props} />
      <Option {...props} />
      <Price {...props} />
    </div>
  );
};

export default ClassType;
