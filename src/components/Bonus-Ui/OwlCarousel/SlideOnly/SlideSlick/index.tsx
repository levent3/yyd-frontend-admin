import { SlideData, SlideSlickOnlySettongs } from "Data/Bonus-Ui/OwlCarouselDara";
import React, { Fragment } from "react";
import Slider from "react-slick";
import { ImgPath } from "utils/Constant";

const SlideSlick = () => {
  return (
    <Fragment>
      <Slider {...SlideSlickOnlySettongs}>
        {SlideData &&
          SlideData.slice(0, 3).map((item, index) => (
            <div className="item" key={index}>
              <img src={`${ImgPath}${item}`} alt="img" className="img-fluid" />
            </div>
          ))}
      </Slider>
    </Fragment>
  );
};

export default SlideSlick;
