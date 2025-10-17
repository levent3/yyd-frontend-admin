import CardHead from "CommonElements/CardHead";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { CART, CHECKOUT, PRODUCT, PRODUCTDETAILS } from "utils/Constant";

const FlushList = () => {
  const submenuObj = [
    {
      text: "Use ",
      code: " .list-group-flush",
    },
    {
      text: " to remove some borders and rounded corners to render list group items.",
    },
  ];
  return (
    <Col xl={4} md={12}>
      <Card>
        <CardHead title="Flush lists" subTitle={submenuObj} />
        <CardBody>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <i className="icofont icofont-arrow-right"> </i>
              {PRODUCT}
            </li>
            <li className="list-group-item">
              <i className="icofont icofont-arrow-right"> </i>
              {PRODUCTDETAILS}
            </li>
            <li className="list-group-item">
              <i className="icofont icofont-arrow-right"> </i>
              {CART}
            </li>
            <li className="list-group-item">
              <i className="icofont icofont-arrow-right"> </i>
              {CHECKOUT}
            </li>
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlushList;
