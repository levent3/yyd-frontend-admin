import React from "react";
import { Col, Row } from "reactstrap";
import { Follower, Following } from "../../../../../../../utils/Constant";

const ProfileFollower = () => {
  return (
    <div className="follow">
      <Row>
        <Col xs={6} className="col-6 border-end">
          <div className="follow-num counter">25.8K</div>
          <span>{Follower}</span>
        </Col>
        <Col xs={6}>
          <div className="follow-num counter">65.2M</div>
          <span>{Following}</span>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileFollower;
