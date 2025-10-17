import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { Icons } from "../../../../utils/Constant";

type propsType = {
  iconType: { title: string; icons: string[] };
  parentCallback: (tag: string) => void;
};

const FontAwsomeicon = ({ iconType, parentCallback }: propsType) => {
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
          <Row className="icon-lists fontawesome-icons">
            {iconType.icons.map((icon, i) => {
              return (
                <Col
                  sm={6}
                  md={4}
                  xl={3}
                  key={i}
                  onClick={(e) => getItag(icon)}
                >
                  <i className={`fa fa-${icon}`}></i> {"fa fa-"}
                  {icon}
                </Col>
              );
            })}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontAwsomeicon;
