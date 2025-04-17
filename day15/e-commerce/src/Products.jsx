import styles from "./Products.module.css";

const Products = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.thumbnail} alt="" />
      <span>{props.title}</span>
      <span>${props.price}</span>
      <span>⭐{props.rating}</span>
      <button>select</button>
    </div>
  );
};

export default Products;
