import React from "react";
import { Col, Row } from "reactstrap";
import {
  ContactUs,
  Contactno,
  LibbyStreet,
  Location,
} from "../../../../../../../utils/Constant";

const ProfileContect = () => {
  return (
    <Col sm={6} xl={4} className="order-sm-2 order-xl-2">
      <Row className="g-3">
        <Col md={6} className="mt-sm-3">
          <div className="text-start tour-email">
            <h6 className="tour-mb-space">
              <i className="fa fa-phone" />
              &nbsp;&nbsp;&nbsp;{ContactUs}
            </h6>
            <span>{Contactno}</span>
          </div>
        </Col>
        <Col md={6}>
          <div className="text-start tour-email">
            <h6 className="tour-mb-space">
              <i className="fa fa-location-arrow" />
              &nbsp;&nbsp;&nbsp;{Location}
            </h6>
            <span>{LibbyStreet}</span>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default ProfileContect;
