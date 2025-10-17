import React from "react";
import { Col, Row } from "reactstrap";
import {
  BOD,
  Email,
  January,
  WilliamEmail,
} from "../../../../../../../utils/Constant";

const ProfileMail = () => {
  return (
    <Col sm={6} xl={4} className="order-sm-1 order-xl-0">
      <Row className="g-3">
        <Col md={6}>
          <div className="text-start tour-email">
            <h6 className="tour-mb-space">
              <i className="fa fa-envelope" />
              &nbsp;&nbsp;&nbsp;{Email}
            </h6>
            <span>{WilliamEmail}</span>
          </div>
        </Col>
        <Col md={6}>
          <div className="text-start tour-email">
            <h6 className="tour-mb-space">
              <i className="fa fa-calendar" />
              &nbsp;&nbsp;&nbsp;{BOD}
            </h6>
            <span>{January}</span>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default ProfileMail;
