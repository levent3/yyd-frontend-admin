import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { Icons } from "utils/Constant";

type propsType = {
  iconType: { title: string; icons: string[] };
  parentCallback: (tag: string) => void;
};

const IcoIconCommon = ({ iconType, parentCallback }: propsType) => {
  const getItag = (tag: string) => {
    parentCallback(tag);
  };
  return (
    <Col sm={12}>
      <Card>
        <CardHeader>
          <h5 className="m-b-0">
            <span className="digits">{iconType.title}</span> {Icons}
          </h5>
        </CardHeader>
        <CardBody>
          <Row className="icon-lists ico-icons">
            {iconType.icons.map((iconItem, i) => {
              return (
                <Col
                  sm={6}
                  lg={4}
                  key={i}
                  onClick={() => {
                    getItag(iconItem);
                  }}
                >
                  <i className={`icofont icofont-${iconItem}`}></i> {iconItem}
                </Col>
              );
            })}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default IcoIconCommon;
