import Cleave from "cleave.js/react";
import { Col, Label } from "reactstrap";
import { Date, DateFormatHeading, DateFormatType } from "utils/Constant";

const DateFormat = () => {
  return (
    <Col sm={6} >
      <div className="card-wrapper border rounded-3 light-card checkbox-checked">
        <h6 className="sub-title">{DateFormatHeading}</h6>
        <form className="row g-3">
          <Col xs={12}>
            <Label className="col-form-label" >{Date}</Label>
            <Cleave className="form-control" options={{ date: true, delimiter: "-", datePattern: ["d", "m", "Y"],}}placeholder="DD-MM-YYYY"/>
          </Col>
          <Col xs={12} >
            <Label className="col-form-label" htmlFor="cleave-date2">{DateFormatType}</Label>
            <Cleave className="form-control" options={{ date: true, delimiter: "-", datePattern: ["m", "Y"] }} placeholder="MM-YYYY"/>
          </Col>
        </form>
      </div>
    </Col>
  );
};

export default DateFormat;
