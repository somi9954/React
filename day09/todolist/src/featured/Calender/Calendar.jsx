import { useState } from "react";
import { CurrentTime } from "../../shared/util/whatTime";
import styles from "./Calendar.module.css";
import TimeText from "./components/TimeText";
import ClockText from "./components/ClockText";

const Calendar = () => {
  return (
    <div className={styles.parents_layout}>
      <div className={styles.layout}>
        {CurrentTime().map((v) => (
          <TimeText text={v} />
        ))}
      </div>
      <ClockText />
    </div>
  );
};

export default Calendar;