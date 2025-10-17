import React from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
import { Create, UpcomingScheduleTitle } from "utils/Constant";
import ScheduleListBox from "./ScheduleListBox";
import { ScheduleListData } from "Data/Dashboard/OnlineCourseData";

const UpcomingSchedule = () => {
  return (
    <Card className="schedule-card">
      <CardHeader className="card-no-border">
        <div className="header-top">
          <h5 className="m-0">{UpcomingScheduleTitle}</h5>
          <div className="card-header-right-icon">
            <Button color="" className="badge-light-primary">
              + {Create}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="pt-0">
        <ScheduleListBox data={ScheduleListData} />
      </CardBody>
    </Card>
  );
};

export default UpcomingSchedule;
