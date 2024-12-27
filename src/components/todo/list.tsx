import { FaCheck, FaPlus } from "react-icons/fa";
import { useState } from "react";
import ActionBtn from "../buttons/ActionBtn";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import { ListProps } from "@/types";

const List : React.FC<ListProps> = ({
  setAddItemClicked,
  addItemClicked,
  createNewTodo,
  todos,
  setTodos,                                     
  taskCompleteHandler,
}) => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low");
  const [error, setError] = useState(false);
  const [isEditingId, setIsEditingId] = useState<null | number>(null);
  
  const editTaskHandler = (id:number) => {
    const taskToEdit = todos.find((todo) => todo.id === id);
    if(taskToEdit){
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
        const updatedTodos = todos.map((todo) =>
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

  return (
    <>
    <div className="listitem flex flex-col gap-2 min-w-max p-2 rounded-md shadow-sm">
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
          <TaskItem
          key={todo.id}
          todo={todo}
          editTaskHandler={editTaskHandler}
          taskCompleteHandler={taskCompleteHandler}/>
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
          setAddItemClicked= {setAddItemClicked}
          handleSaveTask={handleSaveTask}
        />
      )}
      
    </div>
    <div className="footer bg-gray-100 flex justify-end px-2.5 py-2.5 m-0">
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
