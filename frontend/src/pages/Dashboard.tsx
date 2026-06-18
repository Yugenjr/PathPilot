import { useState , useEffect } from "react";

import Navbar from "../components/Navbar";
import GoalCard from "../components/GoalCard";
import TargetList from "../components/TargetList";

type Task = {
  text: string;
  completed: boolean;
};

function Dashboard() {
  const [goal, setGoal] = useState("");

  const [deadline, setDeadline] =
    useState("");

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState<
    Task[]
  >([]);
  
useEffect(() => {
  async function getGoal() {
    const response = await fetch(
      "http://localhost:3000/api/goal"
    );

    const data = await response.json();
    console.log(data);

    setGoal(data.goal);

    setDeadline(data.deadline);
  }

  getGoal();
}, []);

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

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) *
            100
        );

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="card">
          <input
            type="text"
            placeholder="Enter your goal"
            value={goal}
            onChange={(e) =>
              setGoal(e.target.value)
            }
          />

          <input
            type="date"
            value={deadline}
            onChange={(e) =>
              setDeadline(
                e.target.value
              )
            }
          />
        </div>

        <GoalCard
          goal={goal}
          progress={progress}
          deadline={deadline}
        />

        <div className="card">
          <h3>Add Today's Target</h3>

          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
          />

          <button onClick={addTask}>
            Add
          </button>
        </div>

        <TargetList
          tasks={tasks}
          toggleTask={toggleTask}
        />
      </div>
    </>
  );
}

export default Dashboard;