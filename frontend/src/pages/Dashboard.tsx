import { useState } from "react";

import Navbar from "../components/Navbar";
import GoalCard from "../components/GoalCard";
import TargetList from "../components/TargetList";

type Task = {
  text: string;

  completed: boolean;
};

function Dashboard() {
  const [goal, setGoal] = useState("");

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState<Task[]>([]);

  const totalTasks = tasks.length;

const completedTasks = tasks.filter(
  (task) => task.completed
).length;

const progress =
  totalTasks === 0
    ? 0
    : Math.round(
        (completedTasks / totalTasks) * 100
      );


  function addTask() {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,

      {
        text: task,

        completed: false,
      },
    ]);

    setTask("");
  }

  function toggleTask(index: number) {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
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

      <GoalCard
  goal={goal}
  progress={progress}
/>

      <hr />

      <h3>Add Today's Target</h3>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add
      </button>

      <TargetList
        tasks={tasks}
        toggleTask={toggleTask}
      />
    </>
  );
}

export default Dashboard;