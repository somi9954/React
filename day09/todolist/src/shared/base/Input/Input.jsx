import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.inputBox}>
      <input
        className={styles.input}
        onChange={(e) => {
          props.addValue((prev) => e.target.value);
        }}
        type="text"
      />
    </div>
  );
};

export default Input;