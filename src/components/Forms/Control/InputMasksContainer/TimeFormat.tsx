import Cleave from "cleave.js/react";
import { Col, Label } from "reactstrap";
import { HourMonthType, TimeFormatHeading, TimeFormatType } from "utils/Constant";

const TimeFormat = () => {
  return (
    <Col sm={6} >
      <div className="card-wrapper border rounded-3 light-card checkbox-checked">
        <h6 className="sub-title">{TimeFormatHeading}</h6>
        <form className="row g-3">
          <Col xs={12} >
            <Label className="col-form-label" >{TimeFormatType}</Label>
            <Cleave className="form-control" options={{ time: true, timePattern: ["h", "m", "s"] }} placeholder="hh:mm:ss"/>
          </Col>
          <Col xs={12}>
            <Label className="col-form-label" htmlFor="cleave-time2">{HourMonthType}</Label>
            <Cleave className="form-control" options={{ time: true, timePattern: ["h", "m"] }} placeholder="hh:mm"/>
          </Col>
        </form>
      </div>
    </Col>
  );
};

export default TimeFormat;
