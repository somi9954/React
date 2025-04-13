const Size = (props) => {
  const sizeObj = {
    xsmall: "XS",
    small: "S",
    medium: "M",
    large: "L",
    xlarge: "XL",
    xxlarge: "XXL",
  };
  return <span>{sizeObj[props.size] || "M"}</span>;
};

export default Size;