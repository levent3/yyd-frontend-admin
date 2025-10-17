import { inlineStyleFormData } from "Data/Forms/Control";
import { Card, Col, FormGroup, Input, Label, Media, Row } from "reactstrap";

const InlineStyleForm = () => {
  return (
    <form className="mega-inline">
      <Row>
        {inlineStyleFormData.map((data, index) => (
          <Col sm={6} key={index}>
            <Card>
              <Media className="p-20">
                <FormGroup check className={`radio radio-${data.className} m-0 w-100`}>
                  <Input id={`InlineStyleForm-${index}`} type="radio" name="radio1"/>
                  <Label className="form-check-label mb-0 w-100" htmlFor={`InlineStyleForm-${index}`}>
                    <Media body>
                      <span className="mt-0 mega-title-badge">
                        {data.deliveryType}
                        <span className={`badge badge-${data.className} pull-right digits`}>
                          {data.price}
                        </span>
                      </span>
                      <span>{data.deliveryText}</span>
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

export default InlineStyleForm;
