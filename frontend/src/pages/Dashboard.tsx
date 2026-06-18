import { useState } from "react";

import Navbar from "../components/Navbar";
import GoalCard from "../components/GoalCard";
import TargetList from "../components/TargetList";

function Dashboard() {
  const [goal, setGoal] = useState("");

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState<string[]>([]);

  function addTask() {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);

    setTask("");
  }

  return (
    <>
      <Navbar />

      <input
        type="text"
        placeholder="Enter your goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <GoalCard goal={goal} />

      <hr />

      <h3>Add Today's Target</h3>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <TargetList tasks={tasks} />
    </>
  );
}

export default Dashboard;