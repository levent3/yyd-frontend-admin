import { CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import {ColorList,Comments,EmailAddress,FavoritePixelStrapTheme,Password,SelectTheColorHeading} from "utils/Constant";
import CommonCardFooter from "CommonElements/Footer/CommonCardFooter";

const RaiseInputStyleForm = () => {
  let themeList = ["Tivo","Cuba","Roxo","Oslo","Voxo","Sheltos ","Petkart","Zeta",];

  return (
    <Form onSubmit={(event)=>event.preventDefault()} className="theme-form dark-inputs">
      <CardBody>
        <Row>
          <Col>
            <FormGroup>
              <Label>{EmailAddress}</Label>
              <Input className="input-air-primary" type="email" placeholder="name@example.com"/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{Password}</Label>
              <Input className="input-air-primary" type="password" placeholder="Password"/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{FavoritePixelStrapTheme}</Label>
              <select className={`form-select  input-air-primary digits`}>
                {themeList.map((data, index) => (<option key={index}>{data}</option>))}
              </select>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{SelectTheColorHeading}</Label>
              <select className="form-select input-air-primary digits" multiple>
                {ColorList.map((data, index) => (<option key={index} className="rounded-0">{data}</option>))}
              </select>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Label>{Comments}</Label>
              <Input type="textarea" className="input-air-primary"  rows={3} defaultValue={""}/>
            </div>
          </Col>
        </Row>
      </CardBody>
      <CommonCardFooter />
    </Form>
  );
};

export default RaiseInputStyleForm;
