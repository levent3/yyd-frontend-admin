import { optionsLineChart3 } from "Data/widgets/chart";
import React from "react";
import Charts from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { CompareLastMonth, TotalProductHeading } from "utils/Constant";

const TotalProduct = () => {
  return (
    <Col xl={4} md={12} className="box-col-12">
      <Card className="o-hidden">
        <div className="chart-widget-top">
          <CardBody className="row pb-0 m-0">
            <Col xl={9} lg={8} xs={9} className="p-0">
              <h6 className="mb-2">{TotalProductHeading}</h6>
              <h4>93M</h4>
              <span>{CompareLastMonth}</span>
            </Col>
            <Col xl={3} lg={4} xs={3} className="text-end p-0">
              <h6 className="txt-success">+65%</h6>
            </Col>
          </CardBody>
          <div id="chart-widget3">
            <Charts className="flot-chart-placeholder" options={optionsLineChart3} series={optionsLineChart3.series} height="170" type="area"/>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default TotalProduct;
