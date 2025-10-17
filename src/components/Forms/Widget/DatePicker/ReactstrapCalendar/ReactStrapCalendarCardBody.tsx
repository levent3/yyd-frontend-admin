import { CardBody, Col, FormGroup, Input, Label } from "reactstrap";
import { Date, DateAndTimeHeading, Month, Time, Week } from "utils/Constant";

const ReactStrapCalendarCardBody = () => {
  return (
    <CardBody className="card-wrapper">
      <FormGroup className="row">
        <Label className="col-md-3 col-form-label">{DateAndTimeHeading}</Label>
        <Col md={9}>
          <Input className="digits" type="datetime-local" defaultValue="2023-05-03T18:45:00"/>
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Label className="col-md-3 col-form-label">{Date}</Label>
        <Col md={9}>
          <Input className="digits" type="date" defaultValue="2023-05-01" />
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Label className="col-md-3 col-form-label">{Month}</Label>
        <Col md={9}>
          <Input className="digits" type="month" defaultValue="2023-01" />
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Label className="col-md-3 col-form-label">{Week}</Label>
        <Col md={9}>
          <Input className="digits" type="week" defaultValue="2023-W09"/>
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Label className="col-md-3 col-form-label">{Time}</Label>
        <Col md={9} >
          <Input className="digits" type="time" defaultValue="21:45:00"/>
        </Col>
      </FormGroup>
    </CardBody>
  );
};

export default ReactStrapCalendarCardBody;
