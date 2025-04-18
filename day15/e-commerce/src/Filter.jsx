import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import styles from "./Filter.module.css";

const Filter = ({ onFilterStock, onFilterPrice, onFilterRate, onReset }) => {
  const [selectedStock, setSelectedStock] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedRate, setSelectedRate] = useState(null);

  const handleReset = () => {
    setSelectedStock(null);
    setSelectedPrice(null);
    setSelectedRate(null);
    onReset();
  };

  return (
    <div className={styles.filter}>
      <div className={styles.headerStyle}>
        FILTER
        <button onClick={handleReset} className={styles.resetBtnStyle}>
          RESET
        </button>
      </div>

      <Section title="STOCK" className={styles.section}>
        {[10, 20].map((n) => (
          <button
            key={n}
            onClick={() => {
              setSelectedStock(n);
              onFilterStock(n);
            }}
            className={styles.btnStyle}
          >
            {selectedStock === n ? (
              <IoMdCheckmarkCircleOutline />
            ) : (
              <MdOutlineRadioButtonUnchecked />
            )}
            {`See ${n}+ in stock`}
          </button>
        ))}
      </Section>

      <Section title="PRICE" >
        {[5, 10].map((n) => (
          <button
            key={n}
            onClick={() => {
              setSelectedPrice(n);
              onFilterPrice(n);
            }}
            className={styles.btnStyle}
          >
            {selectedPrice === n ? (
              <IoMdCheckmarkCircleOutline />
            ) : (
              <MdOutlineRadioButtonUnchecked />
            )}

            {` See $${n}+`}
          </button>
        ))}
      </Section>
      <Section title="RATING" className={styles.noBorder}>
        {[3, 4].map((n) => (
          <button
            key={n}
            onClick={() => {
              setSelectedRate(n);
              onFilterRate(n);
            }}
            className={styles.btnStyle}
          >
            {selectedRate === n ? (
              <IoMdCheckmarkCircleOutline />
            ) : (
              <MdOutlineRadioButtonUnchecked />
            )}
            {`see ${n}+`}
          </button>
        ))}
      </Section>
    </div>
  );
};

const Section = ({ title, children, className = "" }) => (
  <div
    className={`${styles.section} ${className}`}
    style={{
      padding: 15,
      display: "flex",
      flexDirection: "column"
    }}
  >
    <span>{title}</span>
    {children}
  </div>
);


export default Filter;
