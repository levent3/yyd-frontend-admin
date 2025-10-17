import React from "react";
import { Card, CardBody, CardFooter, Col } from "reactstrap";
import {
  CubaTheme,
  FooterInfotext,
  InfoFooter,
  WebDeveloper,
} from "../../../../../utils/Constant";
import CardHead from "CommonElements/CardHead";

const InfoColorFooter = () => {
  return (
    <Col xl={4} xs={12}>
      <Card className="height-equal">
        <CardHead title={InfoFooter} subTitle={[]} />
        <CardBody>
          <h5 className="pb-2">{WebDeveloper}</h5>
          <p className="mb-0">{FooterInfotext}</p>
        </CardBody>
        <CardFooter className="bg-info text-white">
          <h6 className="mb-0 text-end">{CubaTheme}</h6>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default InfoColorFooter;
