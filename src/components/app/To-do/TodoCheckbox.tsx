import { todoListContext } from "helper/TodoList";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";
import { AddNewTask } from "utils/Constant";

const TodoCheckbox = () => {
  const [markAll, setMarkAll] = useState(false);
  const { addNewTask, setAddNewTask, updateStatus } =useContext(todoListContext);

  const addNewTaskHandle = () => {
    setAddNewTask(!addNewTask)
  };

  const markAllStatus = () => {
    if (markAll === true) {
      updateStatus("completed");
      toast.error("All Task In-Completed !");
    } else {
      updateStatus("pending");
      toast.success("All Task Completed !");
    }
    setMarkAll(!markAll);
  };
  return (
    <div className="mark-all-tasks">
      <div className="mark-all-tasks-container">
        <span className={`mark-all-btn ${markAll?"move-down":"move-up"} `}>
          <span className="btn-label txt-danger">{"Mark all as finished"}</span>
          <span className="action-box completed" onClick={markAllStatus}>
            <i className="icon"><i className="icon-check" /></i>
          </span>
        </span>
      </div>
      <div className="todo-list-footer">
        <div className="add-task-btn-wrapper">
          <span className={`add-task-btn ${addNewTask ? "hide" : ""}`}>
            <Button color="primary" onClick={addNewTaskHandle}>
              <i className="icon-plus" /> {AddNewTask}
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};
export default TodoCheckbox;
