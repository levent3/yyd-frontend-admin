import React from "react";
import { Col, Row } from "reactstrap";
import LeftBar from "../Common/LeftBar";
import RightBar from "../Common/RightBar";
import NewUserClass from "./NewUserClass";
import NewUserClass2 from "./NewUserClass2";

const TimelineTab = () => {
  return (
    <Row>
      <Col className="xl-40 box-col-4" lg={12} md={5} xl={3}>
        <div className="default-according style-1 faq-accordion job-accordion">
          <Row>
            <LeftBar />
          </Row>
        </div>
      </Col>
      <Col className="xl-60 box-col-8e" lg={12} md={7} xl={6}>
        <Row>
          <NewUserClass />
          <NewUserClass2 />
        </Row>
      </Col>
      <Col className="xl-100 box-col-12" xl={3}>
        <div
          className="default-according style-1 faq-accordion job-accordion"
        >
          <Row>
            <RightBar />
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default TimelineTab;
