export interface newTaskType {}
export interface allTaskType {
  id: number;
  title: string;
  collection: string;
  desc: string
}

export interface TaskReducerType {
  newTask: [] | newTaskType[];
  allTask: [] | allTaskType[];
}

export interface TaskReducerTypes {
  TaskReducer: TaskReducerType;
}
