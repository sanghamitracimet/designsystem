import { useEffect, useState } from "react";
import { LiaClipboardListSolid } from "react-icons/lia";
import List from "@/components/todo/List";
import { todoProps } from "@/types";
import { todoData } from "./todoData";
import Pagination from "@/components/Pagination"
const Todo = () => {
  const [addItemClicked, setAddItemClicked] = useState<boolean>(false);
  const [todos, setTodos] = useState<todoProps[]>(todoData);
  const [displayedTodos, setDisplayedTodos] = useState<todoProps[]>([]);

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
      <div className="header flex justify-between border-b-[1px] border-lightGray border-collapse px-5 py-2.5">
      <div className="header flex flex-row gap-2 place-items-center ">
        <LiaClipboardListSolid className="headerIcon" />
        <h2 className="headerTitle"> To Do List</h2>
      </div>
      <Pagination
          data={todos}
          dataPerPage={5}
          onPaginate={(paginatedData) => setDisplayedTodos(paginatedData)}
        />
      </div>
      {/* body section */}
      <div>
        <List
          addItemClicked={addItemClicked}
          setAddItemClicked = {setAddItemClicked}
          createNewTodo={createNewTodo}
          todos={displayedTodos}
          taskCompleteHandler={taskCompleteHandler}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
};

export default Todo;
