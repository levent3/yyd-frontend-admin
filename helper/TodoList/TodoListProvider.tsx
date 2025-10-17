import { ReactNode, useState } from "react";
import { todoListContext } from "./index";
import { todoListInterFace } from "Types/TodoListType";
interface contextType {
  children: ReactNode;
}
const TodoListProvider = ({ children }: contextType) => {
  const [todoList, setTodoList] = useState<todoListInterFace[] | []>([]);
  const [addNewTask, setAddNewTask] = useState(false);

  const removeItems = (id: number) => {
    const newTodo = todoList?.filter((data) => data.id !== id);
    setTodoList(newTodo);
  };

  const updateTodo = (id: number, status: string, badgeClass: string) => {
    const updatedTodo = todoList?.map((data) =>data.id === id? { ...data, status: status, badgeClass: badgeClass }: data)
    setTodoList(updatedTodo);
  };
  const addNewTodo = (task: string) => {
    const temp = {
      id: todoList.length + 1,
      title: task,
      status: "pending",
      badge: "Pending",
      badgeClass: "badge-light-danger",
      timeLimit: "10 dec",
    };
    setTodoList([...todoList, temp]);
  };

  const updateStatus = (value: string) => {
    if (value === "completed") {
      const completedTasks = todoList.map((task) =>task.status === value ? { ...task, status: "pending",badgeClass:"badge-light-danger" } : task);
      setTodoList(completedTasks);
    } else if (value === "pending") {
      const pendingTasks = todoList.map((task) =>task.status === value ? { ...task, status: "completed",badgeClass:"badge-light-success" } : task);
      setTodoList(pendingTasks);
    }
  };

  return (
    <todoListContext.Provider
      value={{
        updateStatus,
        todoList,
        setTodoList,
        addNewTask,
        setAddNewTask,
        removeItems,
        updateTodo,
        addNewTodo,
      }}
    >
      {children}
    </todoListContext.Provider>
  );
};

export default TodoListProvider;
