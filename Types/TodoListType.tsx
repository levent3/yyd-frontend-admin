export interface todoListInterFace {
  id: number;
  title: string;
  status: string;
  statusCode?: string;
  badge: string;
  badgeClass: string;
  timeLimit: string;
}

export interface todoListContextPropsType {
  todoList: todoListInterFace[];
  addNewTask: boolean;
  setTodoList: React.Dispatch<React.SetStateAction<todoListInterFace[]>>;
  setAddNewTask: React.Dispatch<React.SetStateAction<boolean>>;
  removeItems: (item: number) => void;
  addNewTodo: (item: string) => void;
  updateStatus: (item: string) => void;
  updateTodo: (item: number, item2: string, item3: string) => void;
}
