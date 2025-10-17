import Ribbon from "CommonElements/BonusUi/Ribbon";
import CardHead from "CommonElements/CardHead";
import { LeftSideData } from "Data/Bonus-Ui/RibbonsData";
import React, { Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const LeftSideRibbons = () => {
  const subMenu = [
    {
      text: "Use the class of ",
      code: ".ribbon-*",
    },
    {
      text: "[ribbon-space-bottom/ribbon-clip/ribbon-vertical-left/ribbon-bookmark/ribbon-clip-bottom/ribbon-vertical-left] through create ribbons and all ribbon colors are available.",
      code: "[.ribbon-*] ",
    },
  ];
  return (
    <Col sm={12} xl={12}>
      <Card>
        <CardHead title="Variations Of Left Ribbons" subTitle={subMenu} />
        <CardBody>
          <Row className="g-3">
            {LeftSideData &&
              LeftSideData.map((item, index) => (
                <Fragment key={index}>
                  <Ribbon
                    classMain={item.classMain}
                    ribbonClass={item.ribbonClass}
                    ribbonText={item.ribbonText}
                    subText={item.subText}
                  />
                </Fragment>
              ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LeftSideRibbons;
