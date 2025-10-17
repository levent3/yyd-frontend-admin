import { CheckCircle, Info, PlusCircle, Target } from "react-feather";
import { Card, Col, Nav, NavItem, NavLink, Row } from "reactstrap";
import { All, CreateNewProject, Doing, Done } from "utils/Constant";
import Link from "next/link";
import { projectListNavPropsType } from "Types/projectTypes";

const ProjectListNav = ({activeTab,setActiveTab}: projectListNavPropsType) => {
  return (
    <Card>
      <Row>
        <Col md={6}>
          <Nav tabs className="border-tab">
            <NavItem>
              <NavLink className={activeTab === "1" ? "active" : ""} onClick={() => setActiveTab("1")}><Target />{All}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab === "2" ? "active" : ""} onClick={() => setActiveTab("2")}><Info />{Doing}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab === "3" ? "active" : ""} onClick={() => setActiveTab("3")}> <CheckCircle /> {Done}</NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col md={6}>
          <div className="text-end">
            <Link className="btn btn-primary" style={{ color: "white" }} href={`/app/project/new-project`}>
              <PlusCircle />
              {CreateNewProject}
            </Link>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default ProjectListNav;
