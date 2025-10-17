import { projectListData } from "Types/projectTypes";
import { Dispatch, SetStateAction, createContext } from "react";

type GlobalType = {
  projectData: [] | projectListData[];
  setProjectData: Dispatch<SetStateAction<[] | projectListData[]>>;
  getAllProjectData: (data:projectListData[]) => void,

};

const ProjectContext = createContext<GlobalType>({
  projectData: [],
  setProjectData: () => {},
  getAllProjectData: () => {},
});

export default ProjectContext;
