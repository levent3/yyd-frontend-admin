import CardHead from "CommonElements/CardHead";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { ApexCharts, StarterKits, UIKits, WowAnimations } from "utils/Constant";

const ActiveList = () => {
  const submenuObj = [
    {
      text: "Use",
      code: ".active ",
    },
    {
      text: "to a",
      code: ".list-group-item",
    },
    {
      text: " to indicate the current active.",
    },
  ];
  return (
    <Col xl={4} md={6}>
      <Card>
        <CardHead title="Active lists" subTitle={submenuObj} />
        <CardBody>
          <ul className="list-group">
            <li className="list-group-item active bg-warning-light">
              <i className="icofont icofont-arrow-right" /> {UIKits}
            </li>
            <li className="list-group-item">
              <i className="icofont icofont-arrow-right" /> {WowAnimations}
            </li>
            <li className="list-group-item">
              {" "}
              <i className="icofont icofont-arrow-right" /> {ApexCharts}
            </li>
            <li className="list-group-item">
              <i className="icofont icofont-arrow-right" /> {StarterKits}
            </li>
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActiveList;
