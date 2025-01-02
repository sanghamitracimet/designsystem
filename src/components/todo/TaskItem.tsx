import { RxDragHandleDots2 } from "react-icons/rx";
import Badge from "@/components/todo/Badge";
import { FaEdit } from "react-icons/fa";
import { TaskItemProps } from "@/utils/types";
import { useDrag } from "react-dnd";

const TaskItem : React.FC<TaskItemProps>= ({
    todo,
    editTaskHandler,
    taskCompleteHandler,
    setDragId,
    setDropId,

}) => {


  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "Task",
    item: () => {
      return { id: todo.id };
    },
    collect: (monitor) => {
      const isDragging = !!monitor.isDragging();
      return { isDragging };
    },
  }));

  const getTargetId = (id: number) => {
    setDropId(id);
  };

  const getDragId = (id: number) => {
   setDragId(id);
  }

  return (
    <div
    ref={(node) => {
      dragRef(node);
    }}
    onDragCapture={()=> getDragId(todo.id)}  
    onDropCapture={()=>getTargetId(todo.id)}
    key={todo.id}
    className={`group flex items-center list justify-between p-2 bg-listGray border-l-2 border-darkGray text-textGray ${isDragging ? 'opacity-50': 'opacity-100'}`}
  >
    <div className="flex  items-center gap-2"     >
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