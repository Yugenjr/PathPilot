type Task = {
  text: string;

  completed: boolean;
};

type TargetListProps = {
  tasks: Task[];

  toggleTask: (index: number) => void;
};

function TargetList({
  tasks,

  toggleTask,
}: TargetListProps) {
  return (
    <div>
      <h3>Today's Targets</h3>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />

            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TargetList;