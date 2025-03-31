const Text = (props) => {
  return (
    <div style={{ color: props.valid ? "green" : "black" }}>{props.text}</div>
  );
};

export default Text;
