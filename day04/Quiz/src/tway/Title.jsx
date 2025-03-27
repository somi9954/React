import { FiAlertCircle } from "react-icons/fi";

const Title = (props) => {
  const costName = ["이벤트운임", "스마트운임", "일반운임", "비즈니스운임"];
  const styleOption = {
    3: {
      backgroundColor: "#fd908c",
      borderRadius: "2px solid #82ab42"
    }
  };
  console.log(typeof props.costName);
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        fontSize: "20px",
        backgroundColor: styleOption[props.costName] || "#cde4a9",
        borderRadius: styleOption[props.costName] || " 2px solid #d22c26"
      }}
    >
      이벤트처리 <FiAlertCircle />
    </div>
  );
};

export default Title;
