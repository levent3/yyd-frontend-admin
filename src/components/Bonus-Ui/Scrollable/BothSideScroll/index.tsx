import CardHead from "CommonElements/CardHead";
import { BothsideScroll } from "Data/Bonus-Ui/ScrollableData";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { Card, CardBody, Col, Row } from "reactstrap";

const BothSideScroll = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".visible-scroll ",
    },
    {
      text: "through visible both side scrollbar.",
    },
  ];
  return (
    <Col xl={6}>
      <Card>
        <CardHead title="Both Side Visible Scrollbar" subTitle={submenuObj} />
        <CardBody>
          <div className="scroll-bar-wrap">
            <Scrollbars
              className="visible-scroll always-visible scroll-demo horizontal-scroll"
              style={{ width: "100%", height: 300 }}
            >
              <div className="horz-scroll-content">
                <Row>
                  {BothsideScroll &&
                    BothsideScroll.map((item, index) => (
                      <Col sm={3} key={index}>
                        {item.text}
                      </Col>
                    ))}
                </Row>
              </div>
            </Scrollbars>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BothSideScroll;
