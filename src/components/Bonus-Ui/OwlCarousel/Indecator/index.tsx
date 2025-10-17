import CardHead from "CommonElements/CardHead";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import IndecatorSlide from "./IndecatorSlide";

const Indecator = () => {
  const submenu = [
    {
      text: "Use the ",
      code: ".carousel-indicators",
    },
    {
      text: " through carousel indicates.",
    },
  ];

  return (
    <Col xl={6} xs={12}>
      <Card>
        <CardHead title="With Indicators" subTitle={submenu} />
        <CardBody className="auto-play-slider dark-slider">
          <IndecatorSlide />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Indecator;
