const Price = (props) => {
  return <span style={{ fontSize: "14px", fontWeight: "bold" }}>{props.price * props.num}</span>;
};

export default Price;