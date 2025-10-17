import { Activity, Cast, CheckCircle, FilePlus, Trash } from "react-feather";

export const sideBartList = [
  { todoList: true },
  { color: "primary", icon: <FilePlus />, tittle: "All Task" },
  { color: "success", icon: <CheckCircle />, tittle: "Completed", badge: 3 },
  { color: "danger", icon: <Cast />, tittle: "Pending", badge: 2 },
  { color: "info", icon: <Activity />, tittle: "In Process", badge: 2 },
  { color: "danger", icon: <Trash />, tittle: "Trash" },
];
