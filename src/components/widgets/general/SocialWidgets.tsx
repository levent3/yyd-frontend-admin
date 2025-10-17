import { socialDataWidget } from "Data/widgets/general";
import { Card, CardBody, Col } from "reactstrap";
import Image from "next/image";
import { ImgPath } from "utils/Constant";
import ReactApexChart from "react-apexcharts";

const SocialWidgets = () => {
  return (
    <>
      {socialDataWidget.map((data, index) => (
        <Col xl={3} sm={6} key={index}>
          <Card className="social-widget widget-hover">
            <CardBody>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <div className="social-icons">
                    <Image
                      width={35}
                      height={35}
                      src={`${ImgPath}/dashboard-5/social/${data.image}`}
                      alt="facebook icon"
                    />
                  </div>
                  <span>{data.title}</span>
                </div>
                <span className="font-success f-12 d-xxl-block d-xl-none">
                  +{data.gros}%
                </span>
              </div>
              <div className="social-content">
                <div>
                  <h5 className="mb-1">{data.total}</h5>
                  <span className="f-light">{data.subTitle}</span>
                </div>
                <div className="social-chart">
                  <ReactApexChart
                    type="radialBar"
                    height={130}
                    {...data.chartData}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default SocialWidgets;
