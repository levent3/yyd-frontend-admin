import CardHead from "CommonElements/CardHead";
import OnlyTimePicker from "./OnlyTimePicker";
import TimePicker24Hours from "./TimePicker24Hours";
import TimePickerWithLimitedTime from "./TimePickerWithLimitedTime";
import {DateWithTime,PreloadingTime,TimePickerHeading,TimePickerLimits,TimePickerMinMaxRange,TimePickerRange,hourPicker,} from "utils/Constant";
import { Card, CardBody, Col, InputGroup, Label, Row } from "reactstrap";

const TimePicker = () => {
  return (
    <Col xl={6}>
      <Card>
        <CardHead title={TimePickerHeading} />
        <CardBody className="main-flatpickr">
          <div className="card-wrapper border rounded-3">
            <form className="timepicker-wrapper">
              <Row>
                <Label className="col-xxl-3 box-col-12 text-start">{TimePickerHeading}</Label>
                <Col xxl={9} className="box-col-12">
                  <InputGroup><OnlyTimePicker /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Label className="col-xxl-3 box-col-12 text-start">{hourPicker}</Label>
                <Col xxl={9} className="box-col-12">
                  <InputGroup><TimePicker24Hours /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Label className="col-xxl-3 box-col-12 text-start">{TimePickerLimits}</Label>
                <Col xxl={9} className="box-col-12">
                  <InputGroup><OnlyTimePicker /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Label className="col-xxl-3 box-col-12 text-start">{PreloadingTime}</Label>
                <Col xxl={9} className="box-col-12">
                  <InputGroup><OnlyTimePicker /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Label className="col-xxl-3 box-col-12 text-start">{TimePickerRange}</Label>
                <Col xxl={9} className="box-col-12">
                  <InputGroup><TimePickerWithLimitedTime /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Label className="col-xxl-3 box-col-12 text-start">{TimePickerMinMaxRange}</Label>
                <Col xxl={9} className="box-col-12">
                  <InputGroup className="flatpicker-calender"><TimePickerWithLimitedTime /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Label className="col-xxl-3 box-col-12 text-start">{DateWithTime}</Label>
                <Col xxl={9} className="box-col-12">
                  <InputGroup className="flatpicker-calender"><TimePickerWithLimitedTime /></InputGroup>
                </Col>
              </Row>
            </form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TimePicker;
