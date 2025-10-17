import { projectListTabContentType } from "Types/projectTypes";
import ProjectContext from "helper/project";
import { useContext } from "react";
import { Card, CardBody, Row, TabContent, TabPane } from "reactstrap";
import ProjectCommon from "../Common/ProjectCommon";

const ProjectListTabContent = ({ activeTab }: projectListTabContentType) => {
  const { projectData } = useContext(ProjectContext);

  return (
    <Card>
      <CardBody className="pb-0">
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              {projectData.map((item, i) => (<ProjectCommon item={item} key={i} />))}
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              {projectData.map((item, i) =>
                item.badge === "Doing" ? (<ProjectCommon item={item} key={i} />) : (" ")
              )}
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              {projectData.map((item, i) =>
                item.badge === "Done" ? (<ProjectCommon item={item} key={i} />) : (" ")
              )}
            </Row>
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  );
};

export default ProjectListTabContent;
