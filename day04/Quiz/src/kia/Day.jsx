const Day = (props) => {
  const dayKorName = ["일", "월", "화", "수", "목", "금", "토"];
  const dayColor = {
    5: "blue",
    6: "red",
  };
  return (
    <span
      style={{
        color: dayColor[props.dayNum] || "black",
      }}
    >
      {dayKorName[props.dayNum]}
    </span>
  );
};

export default Day;
