const Day = (props) => {
  return (
    <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
      <span style={{ display: "inline-block", fontSize: "40px" }}>
        {props.day}
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "13px",
            color: props.week == "(일)" ? "red" : "#62676c"
          }}
        >
          {props.week}
        </span>
        <span>{props.times}</span>
      </div>
    </div>
  );
};

export default Day;
