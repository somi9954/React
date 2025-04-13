import { FaCircleCheck } from "react-icons/fa6";

const StatusChecker = () => {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      <FaCircleCheck />
      <span>기수리 된 항목입니다.</span>
    </div>
  );
};

export default StatusChecker;