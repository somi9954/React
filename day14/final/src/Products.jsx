import styles from "./Products.module.css";

const products = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.thumbnail} alt="" />
      <span>⭐{props.rating}</span>
      <span>{props.title}</span>
    </div>
  );
};

export default products;
