import Ribbon from "CommonElements/BonusUi/Ribbon";
import CardHead from "CommonElements/CardHead";
import { RightSideData } from "Data/Bonus-Ui/RibbonsData";
import React, { Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const RightSideRibbon = () => {
  const subMenu = [
    {
      text: "Use the class of ",
      code: ".ribbon-*",
    },
    {
      text: "[ribbon-right/ribbon-clip-right/ribbon-vertical-right/ribbon-bookmark/ribbon-clip-bottom-right/ribbon-vertical-right] through create ribbons and all ribbon colors are available.",
      code: "[.ribbon-*]",
    },
  ];

  return (
    <Row>
      <Col sm={12} xl={12}>
        <Card>
          <CardHead title="Variations Of Right Ribbons" subTitle={subMenu} />
          <CardBody>
            <Row className="g-3">
              {RightSideData.map((item, index) => (
                <Col sm={6} xl={4} key={index}>
                  <div
                    className={item.classMain}
                    style={{ minHeight: "159.391px" }}
                  >
                    <div className={item.ribbonClass}>{item.ribbonText}</div>
                    <p>{item.subText}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default RightSideRibbon;
