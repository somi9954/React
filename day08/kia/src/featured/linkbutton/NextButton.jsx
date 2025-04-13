const NextButton = (props) => {
  return (
    <button
      style={{
        width: "300px",
        border: "none",
        padding: "15px",
        textAlign: "center",
        borderRadius: "4px",
        fontWeight: "bold",
        backgroundColor: props.isDone ? "black" : "#E6E7E9",
        color: props.isDone ? "white" : "#B4B9BC",
      }}
    >
      다음
    </button>
  );
};

export default NextButton;