import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";
import {
  CubaTheme,
  InfoColorHeader,
  InfoHeadText,
  WebDesigner,
} from "../../../../../utils/Constant";

const InfoColorHead = () => {
  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal">
        <CardHeader className="bg-info">
          <h4 className="text-white">{InfoColorHeader}</h4>
        </CardHeader>
        <CardBody>
          <h5 className="pb-2">{WebDesigner}</h5>
          <p className="mb-0">{InfoHeadText}</p>
        </CardBody>
        <CardFooter>
          <h6 className="mb-0 text-end">{CubaTheme}</h6>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default InfoColorHead;
