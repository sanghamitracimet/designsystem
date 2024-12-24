const [todos, setTodos] = useState<todoProps[]>([]);
  const [actionBtnClicked, isActionButtonClicked] = useState<Boolean>(false);
  const [isEditing, setIsEditing] = useState(false);
  const handleAddTodos = (taskName: string) => {
    const newTodo: todoProps = {
      id: todos.filter((todo) =>
        todo.task === taskName ? todo.id : Date.now()
      ),
      task: taskName,
      isComplete: false,
    };
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, task: taskName } :  newTodo
      )
    );
    setIsEditing((prev)=> !prev)
    isActionButtonClicked((prev) => true);
  };
  const handleCompleteTask = (id: number)=>{
    setTodos((prev)=> prev.map((todo)=> todo.id=== id? {...todo , isComplete: !todo.isComplete} : todo))
  }
  // const handleDeleteTask = (id : number) =>{
  //   setTodos((prev)=> prev.filter((el)=> el.id !== id))
  // }

  useEffect(() => {
    console.log(actionBtnClicked, todos);
  }, [handleAddTodos]);
