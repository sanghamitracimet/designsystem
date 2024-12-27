import { useEffect, useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import List from "@/components/todo/List";
import { todoProps } from "@/types";

const Todo = () => {
  const [addItemClicked, setAddItemClicked] = useState<boolean>(false);
  const [todos, setTodos] = useState<todoProps[]>([]);

  const createNewTodo = (newTask: string, priorityLevel : "high" | "medium" | "low") => {
    const newTodo: todoProps = {
      id: Date.now(),
      task: newTask,
      isCompleted: false,
      priority: priorityLevel,
    };

    setTodos((prev) => [...prev, newTodo]);
    setAddItemClicked((prev)=>false);
  };

  const taskCompleteHandler = (id: number) => {
    console.log("handler called", id);
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div className="container border border-lightGray">
      {/* header section */}
      <div className="header flex flex-row gap-2 place-items-center border-b-2 border-collapse px-5 py-2.5">
        <FaClipboardList className="headerIcon" />
        <h2 className="headerTitle"> To Do List</h2>
      </div>
      {/* body section */}
      <div>
        <List
          addItemClicked={addItemClicked}
          setAddItemClicked = {setAddItemClicked}
          createNewTodo={createNewTodo}
          todos={todos}
          taskCompleteHandler={taskCompleteHandler}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
};

export default Todo;
