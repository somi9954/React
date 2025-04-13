const Clock = (props) => {
  return (
    <span
      style={{
        fontSize: "18px",
        fontWeight: "bold",
        color: "#05141f",
      }}
    >
      {props.clock}
    </span>
  );
};

export default Clock;