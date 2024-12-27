export interface todoProps{
    id: number,
    task: string,
    isCompleted: boolean,
    priority: "high" | "low" | "medium"
}

export interface ActionBtnProps{
    icon: React.ElementType,
    heading: string
    onClick?: ()=>void;
}

export interface ListProps{
    setAddItemClicked: React.Dispatch<React.SetStateAction<boolean>>;
    addItemClicked: boolean
    createNewTodo: (taskName: string, priority: "low" | "medium" | "high") => void
    todos: todoProps[];
    setTodos: React.Dispatch<React.SetStateAction<todoProps[]>>;
    taskCompleteHandler: (id: number)=>void;
}

export interface BadgeProps {
    level: "high" | "info" | "low" | "medium" | "done" ;
    label: string;
}

export interface TaskItemProps{
    todo: todoProps
    editTaskHandler: (id: number) => void
    taskCompleteHandler: (id: number) => void
}

export interface TaskFormProps{
    taskName: string;
  setTaskName: React.Dispatch<React.SetStateAction<string>>
  priority: "high" | "low" | "medium"
  setPriority: React.Dispatch<React.SetStateAction<"high" | "low" | "medium">>
  error: boolean
  setError:React.Dispatch<React.SetStateAction<boolean>>
  addItemClicked : boolean
  createNewTodo: (taskName: string, priority: "low" | "medium" | "high") => void
  setAddItemClicked: React.Dispatch<React.SetStateAction<boolean>>;
  handleSaveTask: ()=> void
}