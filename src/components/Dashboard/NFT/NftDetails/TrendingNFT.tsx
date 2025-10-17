import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImgPath, TrendingNFTHeading, Href } from "utils/Constant";
import DashboardHead from "../../DashboardCommon/DashboardHead";
import { trendingNFTData } from "Data/Dashboard/NFT";
import { Autoplay } from "swiper";

const TrendingNFT = () => {
  return (
    <Col sm={12}>
      <Card>
        <DashboardHead
          headClass="card-no-border pb-3"
          title={TrendingNFTHeading}
        />
        <CardBody className="pt-0">
          <div className="slider-wrapper arrow-round">
            <Swiper
              breakpoints={{
                150: {slidesPerView: 1,spaceBetween: 40,},
                400: {slidesPerView: 2,spaceBetween: 40,},
                768: {slidesPerView: 3,spaceBetween: 40,},
                1100: {slidesPerView: 4,spaceBetween: 25,},
                1200: {slidesPerView: 3,spaceBetween: 25,},
                1400: {slidesPerView: 4,spaceBetween: 25,},
                1530: {slidesPerView: 5,spaceBetween: 25,}
              }}
              className="mySwiper"
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[Autoplay]}
              loop={true}
              spaceBetween={25}
              slidesPerView={5}
            >
              {trendingNFTData.map((data, index) => (
                <SwiperSlide key={index}>
                  <a className="category-box" href={Href}>
                    <Image
                      width={194.39}
                      height={71.52}
                      src={`${ImgPath}/dashboard-6/category/${data.imageName}`}
                      alt="nft art"
                    />
                    <h6>{data.heading}</h6>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TrendingNFT;
