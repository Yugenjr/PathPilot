type GoalCardProps = {
  goal: string;
  progress: number;
  deadline: string;
};

function GoalCard({
  goal,
  progress,
  deadline,
}: GoalCardProps) {
  return (
    <div className="card">
      <h2>{goal || "Enter your goal"}</h2>

      <p>
        <strong>Deadline:</strong>{" "}
        {deadline || "Not set"}
      </p>

      <p>
        <strong>Progress:</strong>{" "}
        {progress}%
      </p>
    </div>
  );
}

export default GoalCard;