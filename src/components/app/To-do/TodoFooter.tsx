import { todoListContext } from "helper/TodoList";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import {  AddTask, Close } from "utils/Constant";

const TodoFooter = () => {
  const [task, setTask] = useState("");
  const { addNewTask, setAddNewTask, addNewTodo } = useContext(todoListContext);

  const handleNewTask = () => {
    if (task === "") {
      toast.error("please add your todo");
    } else {
      addNewTodo(task);
      setTask("");
    }
  };
  return (
    <div className="todo-list-footer">
      <div className={`new-task-wrapper ${addNewTask ? "visible" : ""} `}>
        <textarea value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter new task here. . ."/>
        <span className="btn btn-danger cancel-btn" onClick={() => setAddNewTask(!addNewTask)}>
          {Close}
        </span>
        <span className="btn btn-success ms-3 add-new-task-btn" onClick={handleNewTask}>
          {AddTask}
        </span>
      </div>
    </div>
  );
};

export default TodoFooter;
