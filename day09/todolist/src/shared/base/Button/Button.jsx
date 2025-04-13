import "./Button.css";
const Button = (props) => {
  return (
    <button onClick={props.add} className="button-19">
      {props.text}
    </button>
  );
};

export default Button;