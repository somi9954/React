const StatusButton = (props) => {
  return (
    <button
      onClick={() => {
        props.setIsClicked();
      }}
      style={{
        backgroundColor: props.isClicked ? "black" : "white",
        color: props.isClicked ? "white" : "black",
        padding: "15px 35px",
        border: "1px solid #DAEDBD",
      }}
    >
      {props.status}
    </button>
  );
};

export default StatusButton;