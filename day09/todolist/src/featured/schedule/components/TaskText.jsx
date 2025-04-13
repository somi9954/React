import Text from "../../../shared/base/Text/Text";
import styles from "./TaskText.module.css";

const TaskText = (props) => {
  return (
    <Text
      text={props.text}
      className={`${styles.task} ${props.isDone && styles.done}`}
    />
  );
};

export default TaskText;
