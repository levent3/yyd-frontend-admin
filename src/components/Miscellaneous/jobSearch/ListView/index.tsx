import { Col, Container, Row } from "reactstrap";
import Sidebar from "../JobSearch/Sidebar";
import CardsPagination from "../JobSearch/Cards/CardsPagination";
import ListViewCard from "./ListViewCard";
import { Href } from "utils/Constant";
import { useState } from "react";

const JobListViewContainer = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <Container fluid={true}>
      <Row>

        <Col xl={3} className="xl-40  box-col-12 job-card-view">
          <div className="md-sidebar">
            <a
              onClick={() => setShowSideBar(!showSideBar)}
              className="email-aside-toggle md-sidebar-toggle btn btn-primary"
              href={Href}
            >
              job filter
            </a>
            <div className={`md-sidebar-aside job-sidebar ${showSideBar ? "open" : ""} `}>
              <div className="default-according style-1 faq-accordion job-accordion">
                <Sidebar />
              </div>
            </div>
          </div>
        </Col>
        <Col xl={9} className="xl-60 box-col-12">

          <ListViewCard />
          <CardsPagination />

        </Col>
      </Row>
    </Container>
  );
};

export default JobListViewContainer;
