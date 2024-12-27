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

export interface TableHeadings {
    id: number;
    label: string;
  }
  
  export interface TableRows {
    id: string;
    status: string;
    customer: string;
    estate: string;
    total: number;
    advance: number;
    balance: number;
  }
  
  export interface TableDetails {
    tableHeadings: TableHeadings[];
    tableRows: TableRows[];
  }
  
  export interface ReUsableTableProps {
    tableDetails: TableDetails;
  }
  
  export interface DropdownProps {
    options: string[]; // Array of options to display in the dropdown
    onSort: (sortBy: string) => void; // Function that handles sorting when an option is selected
    buttonLabel: string; // Label for the dropdown button
  }
  