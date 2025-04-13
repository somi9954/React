import { useEffect, useState } from "react";
import Calender from "./featured/Calender/Calendar";
import Add from "./featured/add/Add";
import Schedule from "./featured/schedule/Schedule";
import Layout from "./layout/Layout";

function App() {
  const [tasks, setTasks] = useState([]);
 
  return (
    <Layout>
      <Calender />
      <Schedule taskList={tasks} />
      <Add setTasks={setTasks} tasks={tasks} />
    </Layout>
  );
}

export default App;
