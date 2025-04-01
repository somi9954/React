const Clock = (props) => {
  return (
    <span style={{ fontWeight: "bold", fontSize: "18px", color: "#05141f" }}>
      {props.time}
    </span>
  );
};

export default Clock;
