import { todoListContextPropsType } from "Types/TodoListType";
import { createContext } from "react";

export const todoListContext = createContext<todoListContextPropsType>({
  todoList: [],
  setTodoList: () => {},
  updateStatus: () => {},
  addNewTodo: () => {},
  addNewTask: false,
  setAddNewTask: () => {},
  updateTodo: () => {},
  removeItems: () => {},
});
