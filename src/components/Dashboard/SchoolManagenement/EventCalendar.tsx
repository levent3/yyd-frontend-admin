import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Card, CardBody, Col } from "reactstrap";
import CommonHeaderWithDropDown from "../common/CommonHeaderWithDropDown";
import { DropdownButtonsList, EventCalendarHeading } from "utils/Constant";
import { CommonHeader } from "./AcademicPerformance/CommonHeader";

const EventCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Col xl={4} sm={6} className="order-0">
      <Card className="height-equal school-manage" style={{ minHeight: "445.484px" }}>
      <CommonHeader title={EventCalendarHeading} />
        <CardBody className="pt-0">
          <div className="default-datepicker">
            <div className="datepicker-here" data-language="en">
              <ReactDatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                inline
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EventCalendar;
