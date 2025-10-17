import CardHead from "CommonElements/CardHead";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import DarkSlider from "./DarkSlider";

const DarkVariant = () => {
  const subMenu = [
    {
      text: "Add ",
      code: ".carousel-dark",
    },
    {
      text: "  to the ",
      code: ".carousel",
    },
    {
      text: "  for darker controls, indicators, and captions. ",
    },
  ];
  return (
    <Col xl={6} xs={12}>
      <Card>
        <CardHead title="Dark Variant" subTitle={subMenu} />
        <CardBody className="auto-play-slider dark-slider">
          <DarkSlider />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DarkVariant;
