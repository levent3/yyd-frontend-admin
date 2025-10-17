import { CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import {MultiplePaintingsItems,MultiplePaintingsLabel,PleaseDoComments,} from "utils/Constant";

const FlatInputStyleForm = () => {
  return (
    <Form className="theme-form dark-inputs">
      <CardBody>
        <Row>
          <Col>
            <FormGroup>
              <Label>Select your favorite roman number</Label>
              <select className="form-select btn-square digits">
                <option>I </option>
                <option>II </option>
                <option>III</option>
                <option>IV </option>
                <option>V </option>
              </select>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{MultiplePaintingsLabel}</Label>
              <select className="form-select btn-square digits" multiple>
                {MultiplePaintingsItems.map((data, index) => (<option key={index} className="rounded-0">{data}</option>))}
              </select>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Label>{PleaseDoComments}</Label>
              <Input type="textarea" className="btn-square" rows={3} defaultValue={""}/>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Form>
  );
};

export default FlatInputStyleForm;
