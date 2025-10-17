import { defaultStyleFormData } from "Data/Forms/Control";
import { Card, Col, FormGroup, Input, Label, Media, Row } from "reactstrap";
import { DayShipping, Estimated, INR } from "utils/Constant";

const DefaultStyleForm = () => {

  return (
    <form className="mega-inline">
      <Row>
        {defaultStyleFormData.map((data, index) => (
          <Col sm={6} key={index}>
            <Card>
              <Media className="p-20">
                <FormGroup check className="radio radio-primary m-0">
                  <Input id={`radio-${index}`} type="radio" name="radio1" />
                  <Label className="form-check-label" htmlFor={`radio-${index}`}>
                    <Media body className="megaoption-space">
                      <span className="mt-0 mega-title-badge">{data.Type}
                        <span className={`badge badge-${data.priceClassName} pull-right digits`}>{data.price} {INR}</span>
                      </span>
                      <span>{Estimated} {data.deliveryTime} {DayShipping}</span>
                    </Media>
                  </Label>
                </FormGroup>
              </Media>
            </Card>
          </Col>
        ))}
      </Row>
    </form>
  );
};

export default DefaultStyleForm;
