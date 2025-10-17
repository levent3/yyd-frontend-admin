import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import {  Card, CardBody, Col } from "reactstrap";
import { ImgPath,  TrendingActionHeading, Href } from 'utils/Constant';
import DashboardHead from "../../DashboardCommon/DashboardHead";
import Image from "next/image";
import SwiperSlideContent from "./SwiperSlideContent";

const TrendingAction = () => {
  const swiperRef = useRef<any>();
  const swiperSlide = [1, 2, 3, 1, 1];

  return (
    <Col xl={6} className="box-col-12">
      <Card>
      <DashboardHead title={TrendingActionHeading} headClass="card-no-border"/>
        <CardBody className="pt-0">
          <div className="slider-wrapper arrow-round">
            <div onClick={() => swiperRef.current.slideNext()} className="swiper-button-next"/>
            <div onClick={() => swiperRef.current.slidePrev()} className="swiper-button-prev "/>
            <Swiper onSwiper={(swiper) => { swiperRef.current = swiper;}}       breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          769: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1530: {
            slidesPerView: 3,
            spaceBetween: 25,
          }
        }}>
              {swiperSlide.map((data,index) => (
                <SwiperSlide key={index}>
                  <div className="product-card">
                    <div className="product-image">
                      <Image width={212} height={110} className="img-fluid" src={`${ImgPath}/dashboard-6/action/${data}.png`} alt="nft"/>
                      <a className="author-img" href={Href}>
                        <Image width={33} height={33} className="img-fluid" src={`${ImgPath}/dashboard-6/author/${data}.png`} alt="author"/>
                      </a>
                    </div>
                    <SwiperSlideContent />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TrendingAction;
