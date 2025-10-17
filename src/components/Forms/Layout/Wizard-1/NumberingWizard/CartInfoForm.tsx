import { Col, FormGroup, Input, Label } from "reactstrap";
import { numberingWizardPropsType } from "../../../../../../Types/FormLayoutType";
import {
  AboveInformationCorrect,
  CVVNumber,
  CardNumber,
  Expiration,
  PlaceHolderName,
  UploadDocumentation,
} from "utils/Constant";

const CartInfoForm = ({
  getUserData,
  basicInputFormValue,
}: numberingWizardPropsType) => {
  const { placeHolderName, cardNumber, expiration, cvvNumber } =
    basicInputFormValue;
  return (
    <form
      className="stepper-two row g-3 needs-validation custom-input"
      noValidate
    >
      <Col md={12}>
        <Label>{PlaceHolderName}</Label>
        <Input
          name="placeHolderName"
          value={placeHolderName}
          onChange={getUserData}
          type="text"
          placeholder="Placeholder name"
        />
      </Col>
      <Col xxl={4} sm={6}>
        <Label>{CardNumber}</Label>
        <Input
          name="cardNumber"
          value={cardNumber}
          onChange={getUserData}
          type="number"
          placeholder="xxxx xxxx xxxx xxxx"
        />
      </Col>
      <Col xxl={4} sm={6}>
        <Label>{Expiration}</Label>
        <Input
          name="expiration"
          value={expiration}
          onChange={getUserData}
          type="number"
          placeholder="xx/xx"
        />
      </Col>
      <Col xxl={4}>
        <Label>{CVVNumber}</Label>
        <Input
          name="cvvNumber"
          value={cvvNumber}
          onChange={getUserData}
          type="number"
        />
      </Col>
      <Col xs={12}>
        <Label>{UploadDocumentation}</Label>
        <Input name="uploadDocumentation" onChange={getUserData} type="file" />
      </Col>
      <Col xs={12}>
        <FormGroup check>
          <Input
            id="invalidCheck-a"
            name="informationCheckBox"
            onChange={getUserData}
            type="checkbox"
            required
          />
          <Label className="form-check-label" htmlFor="invalidCheck-a">
            {AboveInformationCorrect}
          </Label>
        </FormGroup>
      </Col>
    </form>
  );
};

export default CartInfoForm;
