export interface TodoProps{
    id: number,
    task: string,
    isCompleted: boolean,
    priority: Priority
}

export type Priority = "low" | "medium" | "high";

export interface ActionBtnProps{
    icon: React.ElementType,
    heading: string
    onClick?: ()=>void;
}

export interface ListProps{
    setAddItemClicked: React.Dispatch<React.SetStateAction<boolean>>;
    addItemClicked: boolean
    createNewTodo: (taskName: string, priority: Priority) => void
    todos: TodoProps[];
    setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
    taskCompleteHandler: (id: number)=>void;
    originalTodos:TodoProps[]
}

export interface BadgeProps {
    level: "high" | "info" | "low" | "medium" | "done" ;
    label: string;
}

export interface TaskItemProps{
    todo: TodoProps
    editTaskHandler: (id: number) => void
    taskCompleteHandler: (id: number) => void
}

export interface TaskFormProps{
    taskName: string;
  setTaskName: React.Dispatch<React.SetStateAction<string>>
  priority: Priority;
  setPriority: React.Dispatch<React.SetStateAction<"high" | "low" | "medium">>
  error: boolean
  setError:React.Dispatch<React.SetStateAction<boolean>>
  addItemClicked : boolean
  createNewTodo: (taskName: string, priority: "low" | "medium" | "high") => void
  setAddItemClicked: React.Dispatch<React.SetStateAction<boolean>>;
  handleSaveTask: ()=> void
}

export type PaginationProps<T> = {
  data: T[]; // generic array
  dataPerPage: number;
  onPaginate: (paginatedData: T[]) => void;
};

export interface TableHeadings {
    id: number;
    label: string;
  }
export type UsePaginationParams = {
    totalDataCount: number;
    dataPerPage: number;
    siblingCount: number;
    currentPage: number;
  };
  
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
  
  export interface SearchBarProps{
   tableDetails: TableDetails; 
   setTableDetails: React.Dispatch<React.SetStateAction<TableDetails>>;
  }

  export interface BtnProps {
    readonly title: string;
    readonly textColor: string;
    readonly bgColor: string;
    readonly classNames?: readonly string[]; // Optional array of additional class names
  }
  