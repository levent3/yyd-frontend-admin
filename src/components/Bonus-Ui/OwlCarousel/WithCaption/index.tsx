import CardHead from "CommonElements/CardHead";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import CaptionSlider from "./CaptionSlider";

const WithCaption = () => {
  const subMenu = [
    {
      text: "Add captions to your slides easily with the",
      code: " .carousel-caption",
    },
    {
      text: " element within any ",
      code: ".carousel-item.",
    },
  ];
  return (
    <Col xl={6} xs={12}>
      <Card>
        <CardHead title="With Captions" subTitle={subMenu} />
        <CardBody>
          <CaptionSlider />
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithCaption;
