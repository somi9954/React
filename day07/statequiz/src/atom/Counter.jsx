const Counter = (props) => {
  const buttonStyle = { padding: "10px", border: "none", fontWeight: "bold" };
  return (
    <div style={{ border: "1px solid #efefef", borderRadius: "2px", width: "fit-content", display: "flex" }}>
      <button
        style={{ ...buttonStyle, color: props.num == 1 ? "#efefef" : "black" }}
        onClick={() => {
          props.setNum((prev) => (prev == 1 ? 1 : prev - 1));
        }}
      >
        -
      </button>
      <span style={{ padding: "5px 10px", textAlign: "center" }}>{props.num}</span>
      <button
        style={buttonStyle}
        onClick={() => {
          props.setNum((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;