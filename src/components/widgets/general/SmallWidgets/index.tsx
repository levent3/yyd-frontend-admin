import { Card, CardBody, Col, Row } from "reactstrap";
import {smallWidgetsData} from "Data/widgets/general/index";
import CountUp from "react-countup";
import SvgIcon from "CommonElements/Icons/SvgIcon";
import WidgetsWithChart from "./WidgetsWithChart";

const SmallWidgets = () => {
  return (
    <Col xxl={5} xl={8} className="box-col-12">
      <Row className="g-sm-3 height-equal-2 widget-charts">
        {smallWidgetsData.map((data, i) => (
          <Col sm={6} key={i}>
            <Card className={`small-widget mb-sm-0`}>
              <CardBody className={data.color}>
                <span className="f-light">{data.title}</span>
                <div className="d-flex align-items-end gap-1">
                  <h4>
                    <CountUp suffix={data.suffix ? data.suffix : ""} prefix={data.prefix ? data.prefix : ""} duration={5} separator="," end={data.total}/>
                  </h4>
                  <span className={`font-${data.color} f-12 f-w-500`}>
                    <i className={`icon-arrow-${data.gros < 50 ? "down" : "up"}`}/>
                    <span> {data.gros < 50 ? "-" : "+"} {data.gros}%</span>
                  </span>
                </div>
                <div className="bg-gradient">
                  <SvgIcon iconId={data.icon} className="stroke-icon svg-fill"/>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
        <WidgetsWithChart />
      </Row>
    </Col>
  );
};

export default SmallWidgets;
