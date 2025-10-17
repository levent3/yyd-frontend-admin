import { offerStyleBorderFormData } from "Data/Forms/Control";
import Image from "next/image";
import { Card, Col, FormGroup, Input, Label, Media, Row } from "reactstrap";
import { ImgPath } from "utils/Constant";

const OfferStyleBorderForm = () => {
  return (
    <form className="mega-inline offer-style">
      <Row className="flex-column">
        {offerStyleBorderFormData.map((data, index) => (
          <Col xs={12} key={index}>
            <Card>
              <Media className="p-20">
                <FormGroup check className={`checkbox checkbox-${data.checkBoxClassName}`}>
                  <Input id={`OfferStyleBorder-${index}`} type="checkbox" />
                  <Label className="form-check-label my-0" htmlFor={`OfferStyleBorder-${index}`}>
                    <Media body>
                      <span className="d-flex list-behavior-1">
                        <span className="flex-shrink-0">
                          <Image width={158} height={86} className="tab-img img-fluid" src={`${ImgPath}/email-template/${data.imageName}.jpg`} alt="fruits"/>
                        </span>
                        <span className="flex-grow-1">
                          <span className="mb-0">{data.detail}</span>
                        </span>
                      </span>
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

export default OfferStyleBorderForm;
