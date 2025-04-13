import styles from "./Schedule.module.css";
import Task from "./components/Task";

const Schedule = (props) => {
  return (
    <div className={styles.layout}>
      {props.taskList.map((v) => (
        <Task text={v} />
      ))}
    </div>
  );
};

export default Schedule;