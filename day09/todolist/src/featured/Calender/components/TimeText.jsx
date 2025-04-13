import Text from "../../../shared/base/Text/Text";
import styles from "./TimeText.module.css";

const TimeText = (props) => {
  return <Text text={props.text} className={styles.timeText} />;
};

export default TimeText;