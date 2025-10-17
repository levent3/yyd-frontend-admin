import CardHead from "CommonElements/CardHead";
import { SlideData, mouseOverSetting } from "Data/Bonus-Ui/OwlCarouselDara";
import React from "react";
import Slider from "react-slick";
import { Card, CardBody, Col } from "reactstrap";
import { ImgPath } from "utils/Constant";

const Mouseover = () => {
  const subMenu = [
    {
      text: "Use the ",
      code: ".owl-carousel ",
    },
    {
      text: "through slides.",
    },
  ];

  return (
    <Col xl={6} xs={12}>
      <Card>
        <CardHead title="Mouse Hover Variant" subTitle={subMenu} />
        <CardBody className="auto-play-slider">
          <Slider {...mouseOverSetting}>
            {SlideData &&
              SlideData.map((item, index) => (
                <div className="item pe-2" key={index}>
                  <img
                    src={`${ImgPath}${item}`}
                    alt="img"
                    className="img-fluid rounded"
                  />
                </div>
              ))}
          </Slider>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Mouseover;
