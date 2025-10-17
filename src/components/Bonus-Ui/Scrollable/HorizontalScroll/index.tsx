import CardHead from "CommonElements/CardHead";
import { HorizontalData } from "Data/Bonus-Ui/ScrollableData";
import Image from "next/image";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { Card, CardBody, Col, Row } from "reactstrap";
import { ImgPath } from "utils/Constant";

const HorizontalScroll = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".horizontal-scroll ",
    },
    {
      text: "through move content horizontally.",
    },
  ];
  return (
    <Col xl={6}>
      <Card>
        <CardHead title="Horizontal Scrollbar" subTitle={submenuObj} />
        <CardBody>
          <Scrollbars
            className="horizontal-scroll scroll-demo"
            style={{ width: "100%", height: 300 }}
          >
            <div className="horz-scroll-content">
              <Row>
                {HorizontalData &&
                  HorizontalData.map((item, index) => (
                    <Col xs={2} key={index}>
                      <div className="horizontal-img">
                        <Image
                          className="img-fluid"
                          src={`${ImgPath}${item.img}`}
                          alt="girl"
                          width={240}
                          height={360}
                        />
                      </div>
                    </Col>
                  ))}
              </Row>
            </div>
          </Scrollbars>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalScroll;
