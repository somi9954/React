import { useEffect, useState } from "react";
import Button from "../../shared/base/Button/Button";
import Input from "../../shared/base/Input/Input";
import styles from "./Add.module.css";

const Add = (props) => {
  const [value, setValue] = useState("");
  const addTask = () => {
    props.setTasks((prev) => {
      const trimedValue = value.trim();
      return !trimedValue ? prev : [...prev, trimedValue];
    });
  };

  const resetTask = () => {
    props.setTasks((prev) => {
      return [];
    });
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todolist")) || [];
    props.setTasks((prev) => {
      const newPrev = [...prev, ...data];
      return newPrev;
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(props.tasks));
  }, [props.tasks]);

  return (
    <div className={styles.layout}>
      <Input addValue={setValue} />
      <Button add={addTask} text={"+"} />
      <Button add={resetTask} text={"reset"} />
    </div>
  );
};

export default Add;
