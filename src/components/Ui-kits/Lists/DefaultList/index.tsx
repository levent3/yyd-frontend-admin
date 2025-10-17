import CardHead from "CommonElements/CardHead";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { ECommerce, LogoDesign, SEO, Web_Design } from "utils/Constant";

const DefaultList = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".list-group ",
    },
    {
      text: "define the list of items. and used ",
      code: ".list-group-item ",
    },
    {
      text: "to indicate the current content.",
    },
  ];
  return (
    <Col xl={4} md={6}>
      <Card>
        <CardHead title="Default lists" subTitle={submenuObj} />
        <CardBody>
          <ul className="list-group">
            <li className="list-group-item">
              {" "}
              <i className="icofont icofont-arrow-right" />
              {LogoDesign}
            </li>
            <li className="list-group-item">
              {" "}
              <i className="icofont icofont-arrow-right" />
              {Web_Design}
            </li>
            <li className="list-group-item">
              {" "}
              <i className="icofont icofont-arrow-right" />
              {ECommerce}
            </li>
            <li className="list-group-item">
              {" "}
              <i className="icofont icofont-arrow-right" />
              {SEO}
            </li>
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultList;
