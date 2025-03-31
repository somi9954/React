const Input = (props) => {
  return (
    <input
      onChange={(e) => props.value((prev) => e.target.value)}
      type="text"
    />
  );
};

export default Input;
