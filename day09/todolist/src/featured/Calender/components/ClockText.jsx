import { useEffect, useState } from "react";
import Text from "../../../shared/base/Text/Text";
import styles from "./ClockText.module.css";

const ClockText = () => {
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setTimer((prev) => new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return <Text text={timer} className={styles.clocktext} />;
};

export default ClockText;