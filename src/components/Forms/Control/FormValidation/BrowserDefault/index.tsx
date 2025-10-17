import CardHead from "CommonElements/CardHead";
import {
  Card,
  Col,
  CardBody,
  Label,
  Input,
  FormGroup,
  Button,
} from "reactstrap";
import {
  BrowserDefaultsHeading,
  ChooseFile,
  EmailAddress,
  FirstName,
  MasterCard,
  Password,
  PayPal,
  SelectYourPaymentMethod,
  State,
  Visa,
  Check,
  AgreePolicies,
  InformationConfirm,
  Submit,
} from "utils/Constant";
import {
  browserDefaultsData,
  tooltipFormValidationDetail,
} from "../../../../../../Data/Forms/Control/index";

const BrowserDefault = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CardHead
          title={BrowserDefaultsHeading}
          subTitle={browserDefaultsData}
        />
        <CardBody className="custom-input">
          <form
            onSubmit={(event) => event.preventDefault()}
            className="row g-3"
          >
            <Col xs={12}>
              <Label className="form-label" htmlFor="first-name">
                {FirstName}
              </Label>
              <Input type="text" placeholder="First name" required />
            </Col>
            <Col xs={12}>
              <Label>{EmailAddress}</Label>
              <Input
                type="email"
                placeholder="pesamof475@saeoil.com"
                required
              />
            </Col>
            <Col xs={12}>
              <label className="col-sm-12 col-form-label">{Password}</label>
              <Input type="password" required />
            </Col>
            <Col xs={12}>
              <Label>{State}</Label>
              <select className="form-select" required>
                <option selected disabled>
                  Choose...
                </option>
                <option>U.K </option>
                <option>Thailand</option>
                <option>India </option>
                <option>U.S</option>
              </select>
            </Col>
            <Col xs={12}>
              <Label>{ChooseFile}</Label>
              <Input type="file" required />
            </Col>
            <Col xs={12}>
              <div className="card-wrapper border rounded-3 checkbox-checked">
                <h6 className="sub-title">{SelectYourPaymentMethod}</h6>
                <div className="radio-form">
                  <FormGroup check>
                    <Input
                      type="radio"
                      id="flexRadioDefault1"
                      name="flexRadioDefault"
                      required
                    />
                    <Label check htmlFor="flexRadioDefault1">
                      {Visa}
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      type="radio"
                      id="flexRadioDefault2"
                      name="flexRadioDefault"
                      defaultChecked
                      required
                    />
                    <Label check htmlFor="flexRadioDefault2">
                      {MasterCard}
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      type="radio"
                      id="flexRadioDefault3"
                      name="flexRadioDefault"
                      defaultChecked
                      required
                    />
                    <Label check htmlFor="flexRadioDefault3">
                      {PayPal}
                    </Label>
                  </FormGroup>
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <Label
                className="form-label"
                htmlFor="exampleFormControlTextarea1"
              >
                Description
              </Label>
              <Input
                type="textarea"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </Col>
            <Col xs={12} className="checkbox-checked">
              <Input check id="flexCheckDefault" type="checkbox" />
              <Label check htmlFor="flexCheckDefault">
                {" "}
                &nbsp;&nbsp;{AgreePolicies}
              </Label>
            </Col>
            <Col xs={12}>
              <div className="form-check form-switch">
                <Input
                  check
                  id="flexSwitchCheckDefault"
                  type="checkbox"
                  role="switch"
                  required
                />
                <Label check htmlFor="flexSwitchCheckDefault">
                  {InformationConfirm}
                </Label>
              </div>
            </Col>
            <Col xs={12}>
              <Button color="primary" type="submit">
                {Submit}
              </Button>
            </Col>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BrowserDefault;
