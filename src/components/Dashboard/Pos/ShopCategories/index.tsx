import { shopCategoriesData } from "Data/Dashboard/Pos";
import Image from "next/image";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImgPath, ShopByCategories, ViewAll } from "utils/Constant";
import { Autoplay } from "swiper";
import { Href } from '../../../../../utils/Constant/index';

const ShopCategories = () => {
  return (
    <Col xl={12}>
      <Card>
        <CardHeader className="card-no-border">
          <div className="header-top">
            <h5>{ShopByCategories}</h5>
            <div className="card-header-right-btn">
              <a className="font-dark f-12" href={Href}>{ViewAll}</a>
            </div>
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="slider-wrapper arrow-round">
            <Swiper
                breakpoints={{
                  320: {slidesPerView: 2,spaceBetween: 40,},
                  400: {slidesPerView: 3,spaceBetween: 40,},
                  500: {slidesPerView: 4,spaceBetween: 40,},
                  768: {slidesPerView: 5,spaceBetween: 25,},
                  1100: {slidesPerView: 6,spaceBetween: 25,},
                  1200: {slidesPerView: 4,spaceBetween: 25,},
                  1235: {slidesPerView: 5,spaceBetween: 25,},
                  1400: {slidesPerView: 6,spaceBetween: 25,},
                  1530: {slidesPerView: 7,spaceBetween: 25,},
                  1900: {slidesPerView: 7,spaceBetween: 25,},
                }}
            className="mySwiper" slidesPerView={7} autoplay={{delay: 2500,disableOnInteraction: false,}} modules={[Autoplay]} loop={true}>
              {shopCategoriesData.map((data, index) => (
                <SwiperSlide key={index}>
                  <a className="shop-box" href={Href}>
                  <Image width={46} height={46} src={`${ImgPath}/dashboard-8/shop-categories/${data.imageName}`} alt="images" />
                  </a>
                  <span className="m-t-10 category-title f-w-500 text-gray">{data.tittle}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ShopCategories;
