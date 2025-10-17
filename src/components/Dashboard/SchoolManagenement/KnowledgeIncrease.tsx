import {  Card,  Col } from "reactstrap";
import DashboardHead from "../DashboardCommon/DashboardHead";
import {knowledgeLearning,} from "utils/Constant";
import KnowledgeIncreaseCardBody from "./KnowledgeIncreaseCardBody";

const KnowledgeIncrease = () => {
  return (
    <Col xl={12} className="d-xl-block d-none">
      <Card>
        <DashboardHead headClass="card-no-border pb-4" title={knowledgeLearning}/>
        <KnowledgeIncreaseCardBody/>
      </Card>
    </Col>
  );
};

export default KnowledgeIncrease;
