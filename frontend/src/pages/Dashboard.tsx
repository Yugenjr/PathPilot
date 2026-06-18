import { useState } from "react";

import Navbar from "../components/Navbar";
import GoalCard from "../components/GoalCard";
import TargetList from "../components/TargetList";
function Dashboard() {
  const [goal, setGoal] = useState("");

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

      <TargetList />
    </>
  );
}

export default Dashboard;