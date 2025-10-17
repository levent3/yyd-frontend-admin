import { DarkliderCaptionData } from "Data/Bonus-Ui/OwlCarouselDara";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import { ImgPath } from "utils/Constant";

const DarkSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === DarkliderCaptionData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? DarkliderCaptionData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: React.SetStateAction<number>) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = DarkliderCaptionData.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.image}
      >
        <Image
          width={721}
          height={510}
          src={`${ImgPath}/${item.image}`}
          alt={item.captionText}
          className="d-block w-100"
        />
        <CarouselCaption
          className="carousel-opacity"
          captionText={item.captionText}
          captionHeader={item.captionHeader}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      dark={true}
    >
      <CarouselIndicators
        items={DarkliderCaptionData}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default DarkSlider;
