// props object type
// {name: "김땡땡", age: 21}
const Welcome = (props) => {
  return (
    <h1 style={{ color: props.color }}>
      Hello, {props.name}!{props.emoji}
    </h1>
  );
};

export default Welcome;
