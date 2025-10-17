import { shippingMethodsData } from "Data/Forms/Layout";
import { shippingInformationCommonProps } from "Types/FormLayoutType";
import { Button, Col, FormGroup, Input, Row } from "reactstrap";
import { ProceedNext } from "utils/Constant";

const ShippingMethods = ({radioBoxValues,getUserData,handleNextButton,}: shippingInformationCommonProps) => {
  const { shippingMethod } = radioBoxValues;

  return (
    <Row className="shipping-method g-3">
      {shippingMethodsData.map((data, index) => (
        <Col sm={6} key={index}>
          <div className="card-wrapper border rounded-3 h-100 light-card">
            <FormGroup check className="radio radio-primary">
              <Input id={data.value} type="radio" name="shippingMethod" value={data.value} checked={shippingMethod === data.value} onChange={getUserData}/>
              <label className="form-check-label mb-0" htmlFor={data.value}>
                {data.label}
              </label>
            </FormGroup>
            <p>{data.details}</p>
          </div>
        </Col>
      ))}
      <Col xs={12} className="text-end">
        <Button onClick={handleNextButton} color="primary">{ProceedNext}
          <i className="fa fa-truck proceed-next pe-2" />
        </Button>
      </Col>
    </Row>
  );
};

export default ShippingMethods;
