type GoalCardProps = {
  goal: string;
};

function GoalCard({ goal }: GoalCardProps) {
  return (
    <div>
      <h2>{goal}</h2>

      <p>Deadline: 2026-12-31</p>

      <p>Progress: 25%</p>
    </div>
  );
}

export default GoalCard;