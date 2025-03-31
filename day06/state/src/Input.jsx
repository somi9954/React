const Input = (props) => {
  return <input onChange={(e) => props.onChange(e.target.value)} type="text" />;
};

export default Input;
