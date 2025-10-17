import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import ProjectListNav from "./ProjectListNav";
import ProjectListTabContent from "./ProjectListTabContent";

const ProjectListContainer = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <Container fluid>
      <Row className="project-card">
        <Col md={12} className="project-list">
          <ProjectListNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </Col>
        <Col sm={12}>
          <ProjectListTabContent activeTab={activeTab} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectListContainer;
