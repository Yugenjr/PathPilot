type GoalCardProps = {
  goal: string;

  progress: number;
};

function GoalCard({
  goal,

  progress,
}: GoalCardProps) {
  return (
    <div>
      <h2>{goal}</h2>

      <p>Deadline: 2026-12-31</p>

      <p>Progress: {progress}%</p>
    </div>
  );
}

export default GoalCard;