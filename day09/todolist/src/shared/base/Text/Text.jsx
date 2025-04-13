import styles from "./Text.module.css";

const Text = (props) => {
  const { text, className } = props;
  const combinedClassName = `${styles.base} ${className}`;
  return <span className={combinedClassName}>{text}</span>;
};

export default Text;