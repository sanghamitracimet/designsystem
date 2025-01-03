"üse client"

import { Priority, TaskFormProps } from "@/utils/types";
import { useRef, useEffect } from "react";
import { ImCross } from "react-icons/im";



const TaskForm : React.FC<TaskFormProps> = ({
  taskName,
  setTaskName,
  priority,
  setPriority,
  error,
  addItemClicked,
  handleSaveTask,
  handleCancelTask
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(typeof handleCancelTask)
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [addItemClicked]);


  useEffect(() => {
    
  }, [setTaskName, setPriority]);
  
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="New Task"
          className="flex-grow border border-gray p-1.5 text-sm rounded focus:ring-2 focus:ring-skyBlue outline-none"
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPriority(e.target.value as Priority)}
              checked={priority === "high"}
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPriority(e.target.value as "low" | "medium" | "high")}
              className="h-4 w-4 accent-red"
            />
            <label
              htmlFor="high"
              className="ml-1 text-xs font-medium text-red"
            >
              High
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              value="medium"
              name="priority"
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPriority(e.target.value as Priority)}
              checked={priority === "medium"}
              // onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPriority(e.target.value as "low" | "medium" | "high")}
              className="h-4 w-4 accent-yellow"
            />
            <label
              htmlFor="medium"
              className="ml-1 text-xs font-medium text-yellow"
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPriority(e.target.value as Priority)}
              className="h-4 w-4 accent-green"
              checked={priority === "low"}
            />
            <label
              htmlFor="low"
              className="ml-1 text-xs font-medium text-green"
            >
              Low
            </label>
          </div>
          <ImCross color="red" className="cursor-pointer" onClick={()=>handleCancelTask()}/>
        </div>
      </div>
      {error && (
        <span className="text-red text-xs">Please provide a task name</span>
      )}
    </div>
  );
};

export default TaskForm;
