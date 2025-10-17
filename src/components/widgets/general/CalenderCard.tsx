import { useState } from "react";
import DatePicker from "react-datepicker";
import { Card, CardBody, Col } from "reactstrap";

const CalenderCard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (date: Date) => {
    setStartDate(date);
  };

  return (
    <Col xl={4} sm={6} className="d-xxl-block d-xl-none box-col-6">
      <Card className="general-cal" style={{ minHeight: "369.594px" }}>
        <CardBody className="cal-date-widget d-flex align-items-center justify-content-center">
          <div className="cal-datepicker widget-calender">
            <div className="datepicker-here float-sm-end">
              <DatePicker onChange={handleChange} selected={startDate} inline />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CalenderCard;
