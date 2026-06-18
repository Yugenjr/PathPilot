type TargetListProps = {
  tasks: string[];
};
function TargetList({ tasks }: TargetListProps) {
  return (
    <div>
      <h3>Today's Targets</h3>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
export default TargetList;