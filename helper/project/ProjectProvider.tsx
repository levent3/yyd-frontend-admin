import { useState } from "react";
import ProjectContext from "./index";
import { projectListData } from "Types/projectTypes";
import { commonContextType } from "Types/CommonElementType";

const ProjectProvider = ({ children }: commonContextType) => {
  const [projectData, setProjectData] = useState<[] | projectListData[]>([]);

  const getAllProjectData = (data: projectListData[]) => {
    setProjectData(data);
  };

  return (
    <ProjectContext.Provider
      value={{
        projectData,
        setProjectData,
        getAllProjectData,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider };
