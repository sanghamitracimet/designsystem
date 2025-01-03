import { FaCheck, FaPlus } from "react-icons/fa";
import {  useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import { ListProps } from "@/utils/types";
import ActionBtn from "../buttons/ActionBtn";
import { useDrop } from "react-dnd";
 
const List: React.FC<ListProps> = ({
  setAddItemClicked,
  addItemClicked,
  createNewTodo,
  todos,
  setTodos,
  taskCompleteHandler,
  originalTodos,
}) => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low");
  const [error, setError] = useState(false);
  const [isEditingId, setIsEditingId] = useState<null | number>(null);
  const [dragId, setDragId] = useState<number | undefined>();
  const [dropId, setDropId] = useState<number | undefined>();
 

  const editTaskHandler = (id: number) => {
    const taskToEdit = todos.find((todo) => todo.id === id);
    if (taskToEdit) {
      setTaskName(taskToEdit.task);
      setPriority(taskToEdit.priority);
      setIsEditingId(id);
    }
  };
  const handleValidateTaskName = () => {
    if (!taskName.trim()) {
      setError(true);
      return false;
    }
    setError(false);
    return true;
  };
  const handleSaveTask = () => {
    if (handleValidateTaskName()) {
      if (isEditingId) {
        const updatedTodos = originalTodos.map((todo) =>
          todo.id === isEditingId
            ? { ...todo, task: taskName, priority: priority }
            : todo
        );
        setTodos(updatedTodos);
      } else {
        createNewTodo(taskName, priority);
      }
      setTaskName("");
      setPriority("low");
      setError(false);
      setIsEditingId(null);
    }
  };
 
  const moveTasks = (draggedId: number, targetId: number) => {
    const draggedIndex = todos.findIndex((todo) => todo.id === draggedId);
    const targetIndex = todos.findIndex((todo) => todo.id === targetId);
    if (draggedIndex !== -1 && targetIndex !== -1) {
      const updatedTodos = [...originalTodos];
      const [draggedItem] = updatedTodos.splice(draggedIndex, 1);
      updatedTodos.splice(targetIndex, 0, draggedItem);
      setTodos(updatedTodos);
    }
  };
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "Task",
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  useEffect(() => {
    moveTasks(dragId, dropId);
  }, [dragId, dropId]);
 
 
  return (
    <>
      <div
        ref={(node) => {
          dropRef(node);
        }}
        className={`${
          isOver ? "bg-gray-100" : ""
        } listitem flex flex-col gap-2 p-2 rounded-md shadow-sm justify-between `}
      >
        {todos?.map((todo) =>
          todo.id === isEditingId ? (
            <TaskForm
              key={`edit-${todo.id}`}
              taskName={taskName}
              priority={priority}
              setTaskName={setTaskName}
              setPriority={setPriority}
              error={error}
              setError={setError}
              addItemClicked={addItemClicked}
              createNewTodo={createNewTodo}
              setAddItemClicked={setAddItemClicked}
              handleSaveTask={handleSaveTask}
            />
          ) : (
            <div key={todo.id}>
              <TaskItem
                todo={todo}
                editTaskHandler={editTaskHandler}
                taskCompleteHandler={taskCompleteHandler}
                setDragId={setDragId}
                setDropId={setDropId}
              />
            </div>
          )
        )}
 
        {addItemClicked && (
          <TaskForm
            taskName={taskName}
            setTaskName={setTaskName}
            priority={priority}
            setPriority={setPriority}
            error={error}
            setError={setError}
            addItemClicked={addItemClicked}
            createNewTodo={createNewTodo}
            setAddItemClicked={setAddItemClicked}
            handleSaveTask={handleSaveTask}
          />
        )}
      </div>
      <div className="footer bg-listGray flex justify-end px-2.5 py-2.5 m-0">
        {addItemClicked || isEditingId ? (
          <ActionBtn
            icon={FaCheck}
            heading="Save Item"
            onClick={() => handleSaveTask()}
          />
        ) : (
          <ActionBtn
            icon={FaPlus}
            heading="Add Item"
            onClick={() => setAddItemClicked((prev) => !prev)}
          />
        )}
      </div>
    </>
  );
};
 
export default List;