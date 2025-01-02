import { useState } from "react";
import { LiaClipboardListSolid } from "react-icons/lia";
import List from "@/components/todo/List";
import { Priority, TodoProps } from "@/utils/types";
import { todoData } from "./todoData";
import Pagination from "@/components/Pagination"
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
 
const Todo = () => {
  const [addItemClicked, setAddItemClicked] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoProps[]>(todoData);
  const [displayedTodos, setDisplayedTodos] = useState<TodoProps[]>([]);
 
 
  const createNewTodo = (newTask: string, priorityLevel : Priority) => {
    const newTodo: TodoProps = {
      id: Date.now(),
      task: newTask,
      isCompleted: false,
      priority: priorityLevel,
    };
    setTodos((prev) => [...prev, newTodo]);
    setAddItemClicked(false);
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
    <DndProvider backend={HTML5Backend}>
    <div className="container border border-lightGray rounded-sm shadow-md">
      {/* header section */}
      <div className="header flex justify-between border-b-[1px] border-lightGray border-collapse px-5 py-4">
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
          originalTodos = {todos}
          taskCompleteHandler={taskCompleteHandler}
          setTodos={setTodos}
        />
      </div>
    </div>
    </DndProvider>
  );
};
 
export default Todo;