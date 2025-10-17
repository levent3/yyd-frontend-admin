import { todoListInterFace } from "Types/TodoListType";
import { todoListContext } from "helper/TodoList";
import { useContext } from "react";
import { toast } from "react-toastify";
import TodoFooter from "./TodoFooter";

const TodoList = () => {
  const {updateTodo,removeItems,todoList,} = useContext(todoListContext);

  const handleRemoveTodo = (todoId: number, todo: string) => {
    removeItems(todoId);
    toast.success(`${todo} deleted`);
  };

  const handleMarkedTodo = (item: todoListInterFace) => {
    if (item.status === "completed") {
      updateTodo(item.id, "pending", "badge-light-danger");
      toast.error(item.title + " as Incomplete");
    } else if (item.status === "pending") {
      updateTodo(item.id, "completed", "badge-light-success");
      toast.success(item.title + " as Complete");
    }
  };
  return (
    <div className="todo-list-body">
      <TodoFooter />
      <ul id="todo-list">
        {todoList.length > 0
          ? todoList?.map((todo, index) => (
              <li className={`task ${todo.status}`} key={index}>
                <div className="task-container">
                  <h4 className="task-label">{todo.title}</h4>
                  <div className="d-flex align-items-center gap-4">
                    <span className={`badge ${todo.badgeClass}`}>{todo.status}</span>
                    <span onClick={() => handleRemoveTodo(todo.id, todo.title)} className="action-box large delete-btn">
                      <i className="icon"><i className="icon-trash" /></i>
                    </span>
                    <span className="action-box large complete-btn" onClick={() => handleMarkedTodo(todo)}>
                      <i className="icon"><i className="icon-check" /></i>
                    </span>
                  </div>
                </div>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};
export default TodoList;
