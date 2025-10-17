import React from "react";
import { Col, Row } from "reactstrap";

import LightCardBox from "./LightCardBox";
import { DropdownType } from "Types/DashboardType";

type propsType = {
  LightCardData: DropdownType[];
};

const LightCard = ({ LightCardData }: propsType) => {
  return (
    <Col xl={3} md={12} sm={5} className="p-0">
      <Row className="g-sm-4 g-2">
        {LightCardData.map((data, i: number) => (
          <Col key={i} xl={12} md={4}>
            <LightCardBox data={data} />
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default LightCard;
