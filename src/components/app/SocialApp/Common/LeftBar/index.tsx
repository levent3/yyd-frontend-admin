import React, { Fragment } from "react";
import { Col, Card } from "reactstrap";
import MyProfileClass from "./MyProfileClass";
import MutualFriends from "./MutualFriends";
import ActivityFeedClass from "./ActivityFeedClass";
import Image from "next/image";
import { ImgPath } from "utils/Constant";

const LeftBar = () => {
  return (
    <Fragment>
      <Col xl={12}>
        <MyProfileClass />
      </Col>
      <Col xl={12}> <MutualFriends /> </Col>
      <Col xl={12}> <ActivityFeedClass /> </Col>
    </Fragment>
  );
};

export default LeftBar;
