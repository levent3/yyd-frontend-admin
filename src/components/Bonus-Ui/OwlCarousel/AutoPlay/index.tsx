import CardHead from "CommonElements/CardHead";
import { AutoPlaySetting, SlideData } from "Data/Bonus-Ui/OwlCarouselDara";
import React from "react";
import Slider from "react-slick";
import { Card, CardBody, Col } from "reactstrap";
import { ImgPath } from "utils/Constant";

const AutoPlay = () => {
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
        <CardHead title="Auto Play Variant" subTitle={subMenu} />
        <CardBody className="auto-play-slider">
          <Slider {...AutoPlaySetting}>
            {SlideData &&
              SlideData.map((item, index) => (
                <div className="item px-1" key={index}>
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

export default AutoPlay;
