import { Card, CardBody, Col, InputGroup, Label, Row } from "reactstrap";
import CardHead from "../../../../../../CommonElements/CardHead";
import {DatePickerHeading,DefaultDate,DisabledDates,HumanFriendly,MinMaxValue,MultiplesDatesHeading,PreloadingDates,Range,} from "utils/Constant";
import DatePickerComponent2 from "./DatePickerComponent2";
import MinMaxValueDatePicker from "./MinMaxValueDatePicker";
import DateRange from "./DateRange";
import HumanFriendlyDatePicker from "./HumanFriendlyDatePicker";
import { MultiplesDates } from "./MultiplesDates";
import DisabledDatePickerComponent from "./DisabledDatePickerComponent";

const DatePickerComponent = () => {
  return (
    <Col xl={6}>
      <Card>
        <CardHead title={DatePickerHeading} />
        <CardBody className="main-flatpickr">
          <div className="card-wrapper border rounded-3">
            <form className="timepicker-wrapper">
              <Row>
                <Label className="col-xxl-3 box-col-12 text-start">{DefaultDate}</Label>
                <Col xxl={9} className="box-col-12">
                  <InputGroup className="flatpicker-calender"><DatePickerComponent2 /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Label className="col-xxl-3 box-col-12 text-start">{HumanFriendly}</Label>
                <Col xxl={9} className="box-col-12">
                  <InputGroup className="flatpicker-calender"><HumanFriendlyDatePicker /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Label className="col-xxl-3 box-col-12 text-start">{MinMaxValue}</Label>
                <Col xxl={9} className="box-col-12">
                  <InputGroup className="flatpicker-calender"><MinMaxValueDatePicker /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Label className="col-xxl-3 box-col-12 text-start">{DisabledDates}</Label>
                <Col xxl={9} className="box-col-12">
                  <InputGroup className="flatpicker-calender"><DisabledDatePickerComponent /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Label className="col-xxl-3 box-col-12 text-start">{MultiplesDatesHeading}</Label>
                <Col xxl={9} className="box-col-12">
                  <InputGroup className="flatpicker-calender"><MultiplesDates /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Label className="col-xxl-3 box-col-12 text-start">{Range}</Label>
                <Col xxl={9} className="box-col-12">
                  <InputGroup className="flatpicker-calender"><DateRange /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Label className="col-xxl-3 box-col-12 text-start">{PreloadingDates}</Label>
                <Col xxl={9} className="box-col-12">
                  <InputGroup className="flatpicker-calender"><DatePickerComponent2 /></InputGroup>
                </Col>
              </Row>
            </form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DatePickerComponent;
