const Price = (props) => {
  const boxStyle = {
    display: "flex",
    gpa: "2px",
    textAlign: "center",
    padding: "20px",
    fontSize: "20px",
  };
  if (props.seats == "0") return <div>매진</div>;
  return (
    <div style={boxStyle}>
      <span style={{ color: "gray", fontSize: "12px" }}>{props.currency}</span>
      <span style={{ color: "black", fontSize: "18px" }}>{props.price}</span>
      <span style={{ color: "black", fontSize: "18px" }}>{props.seats}석</span>
    </div>
  );
};

export default Price;
