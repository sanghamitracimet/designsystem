import { RxDragHandleDots2 } from "react-icons/rx";
import Badge from "@/components/todo/Badge";
import { FaEdit } from "react-icons/fa";
import { TaskItemProps } from "@/types";

const TaskItem : React.FC<TaskItemProps>= ({
    todo,
    editTaskHandler,
    taskCompleteHandler
}) => {
  return (
    <div
    key={todo.id}
    className="group flex items-center justify-between p-2 bg-listGray border-l-2 border-darkGray text-textGray"
  >
    <div className="flex items-center gap-2">
      <RxDragHandleDots2 size={24} className="text-darkerGray cursor-move" />
      <input
        type="checkbox"
        className="h-4 w-4 text-blue focus:ring-blue  accent-blue"
        checked={todo.isCompleted}
        onChange={() => taskCompleteHandler(todo.id)}
      />
      <h3
        className={`${
          todo.isCompleted
            ? "line-through text-gray-500 font-normal"
            : "text-gray-700 font-semibold"
        }`}
      >
        {todo.task}
      </h3>
      <Badge
        level={todo.isCompleted ? "done" : todo.priority}
        label={todo.priority}
      />
    </div>
    <button
      className="invisible  text-red group-hover:visible pl-20"
      onClick={() => editTaskHandler(todo.id)}
    >
      <FaEdit />
    </button>
  </div>
  )
}

export default TaskItem