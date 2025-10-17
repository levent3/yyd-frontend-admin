import CardHead from "CommonElements/CardHead";
import { Col, Card, CardBody, Row, InputGroup, Input } from "reactstrap";
import { DefaultCalendarHeading } from "utils/Constant";
import Calendar from "react-calendar";
import { useState } from "react";

const DefaultCalendar = () => {
  const [dateValue, setDateValue] = useState<any>(new Date());
  return (
    <Col xl={6}>
      <Card>
        <CardHead title={DefaultCalendarHeading} />
        <CardBody className="card-wrapper">
          <Row className="g-3">
            <Col xs={12}>
              <InputGroup className="main-inline-calender">
                <Input
                  placeholder={` ${dateValue.getDate()}- ${
                    dateValue.getMonth() + 1
                  } - ${dateValue.getFullYear()} `}
                  className="mb-2 flatpickr-input"
                  readonly="readonly"
                />
                <Calendar
                  onChange={(value) => setDateValue(value)}
                  value={dateValue}
                />
              </InputGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultCalendar;
