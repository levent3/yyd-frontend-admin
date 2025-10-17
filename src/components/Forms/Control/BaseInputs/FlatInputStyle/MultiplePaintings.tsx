import { Col, FormGroup, Label, Row } from "reactstrap";
import { MultiplePaintingsItems, MultiplePaintingsLabel } from "utils/Constant";

const MultiplePaintings = () => {
  return (
    <Row>
      <Col>
        <FormGroup>
          <Label>{MultiplePaintingsLabel}</Label>
          <select className="form-select btn-square digits" multiple>
            {MultiplePaintingsItems.map((data, index) => (
              <option key={index} className="rounded-0">
                {data}
              </option>
            ))}
          </select>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default MultiplePaintings;
