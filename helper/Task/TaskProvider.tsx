import React, { ReactNode, useState } from "react";
import TodoContext from "./index";
import { taskListInterFace, taskNew } from "@/pages/app/task";
interface CustomizerContextType {
  children: ReactNode;
}
const TaskProvider = ({ children }: CustomizerContextType) => {
  const [allTask, setAllTask] = useState<taskListInterFace[]>([]);

  const addNewTask = (data: taskNew) => {
    
    const taskTemp = {
      id: allTask.length + 1,
      title: data.title,
      collection: data.collection,
      description: data.description,
    };
    setAllTask((prevTask) => [...prevTask, taskTemp]);
  };

  const removeTask = (id:number) => {
    const updatedTask = allTask.filter((data)=>data.id !== id)
    setAllTask(updatedTask)
  }

  return (
    <TodoContext.Provider
      value={{
        allTask,
        setAllTask,
        addNewTask,
        removeTask
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TaskProvider };
