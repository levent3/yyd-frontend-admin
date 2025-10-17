import React from "react";
import NftIncome from "./NftIncome";
import WeeklySalesStatus from "./NftIncome/WeeklySalesStatus";
import { Card, Col, Row } from "reactstrap";

const IncomeAndSaleStatus = () => {
  return (
    <Col xl={6} className="box-col-12">
      <Card className="income-wrap">
        <Row className="mx-0">
          <NftIncome />
          <WeeklySalesStatus />
        </Row>
      </Card>
    </Col>
  );
};

export default IncomeAndSaleStatus;
