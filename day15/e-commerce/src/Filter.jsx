import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import styles from "./Filter.module.css";
const Filter = (props) => {
  return (
    <div className={styles.filter}>
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #eee",
          justifyContent: "space-between",
          padding: "15px"
        }}
      >
        FILTER
        <button
          style={{
            border: " none",
            backgroundColor: "white",
            color: "#d9d7d7",
            fontWeight: "bold",
            fontSize: "15px"
          }}
        >
          RESET
        </button>
      </div>
      <div
        style={{
          borderBottom: "1px solid #eee",
          padding: "15px",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <span>STOCK</span>
        <button
          style={{ textAlign: "left", fontSize: "15px", fontWeight: "bold" }}
        >
          <MdOutlineRadioButtonUnchecked /> See 10+ in stock
          <IoMdCheckmarkCircleOutline /> See 10+ in stock
        </button>
        <button
          style={{ textAlign: "left", fontSize: "15px", fontWeight: "bold" }}
        >
          <MdOutlineRadioButtonUnchecked /> See 20+ in stock
          <IoMdCheckmarkCircleOutline />
          See 20+ in stock
        </button>
      </div>
      <div
        style={{
          borderBottom: "1px solid #eee",
          padding: "15px",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <span>PRICE</span>
        <button
          style={{ textAlign: "left", fontSize: "15px", fontWeight: "bold" }}
        >
          <MdOutlineRadioButtonUnchecked />
          See $5+
          <IoMdCheckmarkCircleOutline /> See $5+
        </button>
        <button
          style={{ textAlign: "left", fontSize: "15px", fontWeight: "bold" }}
        >
          <MdOutlineRadioButtonUnchecked />
          See $10+
          <IoMdCheckmarkCircleOutline /> See $10+
        </button>
      </div>
      <div
        style={{
          borderBottom: "1px solid #eee",
          padding: "15px",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <span>RATING</span>
        <button
          style={{ textAlign: "left", fontSize: "15px", fontWeight: "bold" }}
        >
          <MdOutlineRadioButtonUnchecked />
          See 3+
          <IoMdCheckmarkCircleOutline />
          See 3+
        </button>
        <button style={{ textAlign: "left", fontSize: "15px" }}>
          <MdOutlineRadioButtonUnchecked />
          See 4+
          <IoMdCheckmarkCircleOutline />
          See 4+
        </button>
      </div>
    </div>
  );
};

export default Filter;
