import styles from "./Button.module.css"

const Button = (props) => {
 const styleObject = {
  white: styles.white,
  grey: styles.grey,
  sky: styles.sky,
  trans: styles.trans,
 }

  return <button className={`${styleObject[props.type]} ${styles.button}`}>{props.text}</button>;
};

export default Button;
