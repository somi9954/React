import styles from "./Food.module.css";

const Food = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.image} alt="" />
      <span>{props.name}</span>
    </div>
  );
};

export default Food;
