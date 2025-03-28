import { FiAlertCircle } from "react-icons/fi";

const Title = (props) => {
  const costName = ["이벤트운임", "스마트운임", "일반운임", "비즈니스운임"];
  const styleOption = {
    3: {
      backgroundColor: "#cde4a9", 
      orderRadius: "5px",  
      borderTop: "2px solid #d22c26" 
    }
  };
  return (
    <div
      style={{  
        textAlign: "center",
        padding: "20px",
        fontSize: "20px",
        backgroundColor: styleOption[props.costName] || "#fd908c",
        borderRadius: styleOption[props.costName] || "2px solid #82ab42"
      }}
    >
    이벤트 운임
  <FiAlertCircle />
    </div>
  );
};

export default Title;
