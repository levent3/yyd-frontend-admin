import { taskListInterFace } from "@/pages/app/task";
import { Dispatch, SetStateAction, createContext } from "react";
interface GlobalType  {
    allTask: taskListInterFace[];
    setAllTask: Dispatch<SetStateAction< taskListInterFace[]>>;
    addNewTask:(data:taskListInterFace)=>void
    removeTask:(data:number)=>void
};

const TaskContext = createContext<GlobalType>({
  allTask: [],
  setAllTask: () => {},
  addNewTask:()=>{},
  removeTask:()=>{}
});

export default TaskContext;
