import React from "react";
import { Card, CardBody } from "reactstrap";
import DashboardHead from "../../DashboardCommon/DashboardHead";
import { TodayProgressMessage, TodayProgressTitle } from "utils/Constant";
import dynamic from "next/dynamic";
import { todayProgressData } from "Data/Dashboard/OnlineCourseData/Chart";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const TodayProgress = () => {
  return (
    <Card className="get-card">
      <DashboardHead
        headClass="card-no-border"
        title={TodayProgressTitle}
        spanClass="f-14 f-w-500 f-light"
        message={TodayProgressMessage}
      />
      <CardBody className="pt-0">
        <div className="progress-chart-wrap progress-chart-wrapper">
          <ReactApexChart
            type="radialBar"
            width={240}
            height={360}
            options={todayProgressData.options}
            series={todayProgressData.series}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default TodayProgress;
