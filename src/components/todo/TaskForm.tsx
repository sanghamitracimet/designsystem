import { TaskFormProps } from "@/types";
import { useRef, useEffect } from "react";

const TaskForm : React.FC<TaskFormProps> = ({
  taskName,
  setTaskName,
  priority,
  setPriority,
  error,
  setError,
  addItemClicked,
  createNewTodo,
  setAddItemClicked,
  handleSaveTask,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [addItemClicked]);

  useEffect(() => {}, [setTaskName, setPriority]);
  
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="New Task"
          className="flex-grow border border-gray-300 p-1.5 text-sm rounded focus:ring-2 focus:ring-blue-500"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSaveTask();
            }
          }}
        />
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <input
              type="radio"
              value="high"
              name="priority"
              id="high"
              checked={priority === "high"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPriority(e.target.value)}
              className="h-4 w-4 accent-red-500"
            />
            <label
              htmlFor="high"
              className="ml-1 text-xs font-medium text-red-700"
            >
              High
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              value="medium"
              name="priority"
              id="medium"
              checked={priority === "medium"}
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPriority(e.target.value)}
              className="h-4 w-4 accent-yellow-500"
            />
            <label
              htmlFor="medium"
              className="ml-1 text-xs font-medium text-yellow-700"
            >
              Medium
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              value="low"
              name="priority"
              id="low"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPriority(e.target.value)}
              className="h-4 w-4 accent-green-500"
              checked={priority === "low"}
            />
            <label
              htmlFor="low"
              className="ml-1 text-xs font-medium text-green-700"
            >
              Low
            </label>
          </div>
        </div>
      </div>
      {error && (
        <span className="text-red-500 text-xs">Please provide a task name</span>
      )}
    </div>
  );
};

export default TaskForm;
