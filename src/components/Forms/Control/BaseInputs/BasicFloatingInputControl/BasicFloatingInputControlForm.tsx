import CommonCardFooter from "CommonElements/Footer/CommonCardFooter";
import { CardBody, Form, Row, Col, FormGroup, Label, Input, InputGroupText, InputGroup, } from "reactstrap";
import { EmailAddress, InputGroupHeading, CommentsHeading, InputWithValue, InvalidInputHeading, OpenThisSelectMenu, PasswordHeading, UserName, ValidInputHeading, WorksWithSelects, Username, UserNameError, LayoutHeading, } from "utils/Constant";
const BasicFloatingInputControlForm = () => {
  return (
    <Form className="theme-form">
      <CardBody className="custom-input">
        <Row>
          <Col>
            <FormGroup className="row">
              <Label className="col-sm-3">{ValidInputHeading}</Label>
              <Col sm={9}>
                <div className="form-floating">
                  <Input type="email" placeholder="name@example.com" defaultValue="test@example.com" />
                  <Label>{InputWithValue}</Label>
                </div>
              </Col>
            </FormGroup>
            <FormGroup className="row">
              <Label className="col-sm-3">{InvalidInputHeading}</Label>
              <Col sm={9}>
                <div className="form-floating">
                  <Input className="is-invalid" type="email" placeholder="name@example.com" defaultValue="test@example.com" />
                  <Label>{InvalidInputHeading}</Label>
                </div>
              </Col>
            </FormGroup>
            <FormGroup className="row">
              <Label className="col-sm-3">{CommentsHeading}</Label>
              <Col sm={9}>
                <div className="form-floating">
                  <Input type="textarea" placeholder="Leave a comment here" defaultValue={""} />
                  <Label>{CommentsHeading}</Label>
                </div>
              </Col>
            </FormGroup>
            <FormGroup className="row">
              <Label className="col-sm-3">{EmailAddress}</Label>
              <Col sm={9}>
                <FormGroup floating >
                  <Input type="email" />
                  <Label>{EmailAddress}</Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup className="row">
              <Label className="col-sm-3">{PasswordHeading}</Label>
              <Col sm={9}>
                <FormGroup floating> <Input type="password" /> <Label>{PasswordHeading}</Label></FormGroup>
              </Col>
            </FormGroup>
            <Row className="mb-3">
              <Label className="col-sm-3">{CommentsHeading}</Label>
              <Col sm={9}>
                <FormGroup floating>
                  <Input type="textarea" placeholder="Leave a comment here" style={{ height: 100 }} defaultValue={""} />
                  <Label>{CommentsHeading}</Label>
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Label className="col-sm-3">{OpenThisSelectMenu}</Label>
              <Col sm={9}>
                <FormGroup floating>
                  <select className="form-select">
                    <option selected>{OpenThisSelectMenu}</option>
                    <option value={1}>I </option>
                    <option value={2}>II </option>
                    <option value={3}>III </option>
                  </select>
                  <Label>{WorksWithSelects}</Label>
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Label className="col-sm-3">{InputGroupHeading}</Label>
              <Col sm={9}>
                <InputGroup>
                  <InputGroupText>@</InputGroupText>
                  <FormGroup floating className="mb-3"><Input type="text" /><Label>{UserName}</Label></FormGroup>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Label className="col-sm-3">{InputGroupHeading}</Label>
              <Col sm={9}>
                <InputGroup className="has-validation">
                  <InputGroupText>@</InputGroupText>
                  <FormGroup floating className="is-invalid"><Input className="is-invalid" type="text" required /><Label>{Username}</Label></FormGroup>
                  <div className="invalid-feedback">{UserNameError}</div>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Label className="col-sm-3">{LayoutHeading}</Label>
              <Col sm={9}>
                <Row className="g-2">
                  <Col xxl={6}>
                    <FormGroup floating>
                      <Input type="email" placeholder="name@example.com" defaultValue="mdo@example.com" />
                      <Label>{EmailAddress}</Label>
                    </FormGroup>
                  </Col>
                  <Col xxl={6}>
                    <FormGroup floating>
                      <select className="form-select">
                        <option selected>{OpenThisSelectMenu}</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                      <label>{WorksWithSelects}</label>
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
      <CommonCardFooter />
    </Form>
  );
};
export default BasicFloatingInputControlForm;
