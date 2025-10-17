import { Col, FormGroup, Row } from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { BirthDate, Days, Months, Years } from "utils/Constant";

const PersonalDetailRow = () => {
  return (
    <Row>
      <div className="col-form-label pt-0">{BirthDate}</div>
      <Col sm={4}>
        <FormGroup>
          <Typeahead labelKey="name" multiple={false} id="Month" options={Months} placeholder="Choose a Month..." />
        </FormGroup>
      </Col>
      <Col sm={4}>
        <FormGroup className="select-no-label">
          <Typeahead labelKey="name" multiple={false} options={Days} id="date" placeholder="date" />
        </FormGroup>
      </Col>
      <Col sm={4}>
        <FormGroup className="select-no-label">
          <Typeahead labelKey="name" multiple={false} options={Years} id="Year" placeholder="Year" />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default PersonalDetailRow;
