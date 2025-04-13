import { useState } from "react";
import styles from "./Task.module.css";
import CheckBox from "../../../shared/base/CheckBox/CheckBox"
import TaskText from "./TaskText";

const Task = (props) => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <div className={styles.layout}>
      <TaskText text={props.text} isDone={isCheck} />
      <CheckBox setIsCheck={setIsCheck} />
    </div>
  );
};

export default Task;