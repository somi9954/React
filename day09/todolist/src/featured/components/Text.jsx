import styles from "./Text.module.css";
const Text = (props) => {
  return <span className={styles.text}>{props.text}</span>;
}
 
export default Text;