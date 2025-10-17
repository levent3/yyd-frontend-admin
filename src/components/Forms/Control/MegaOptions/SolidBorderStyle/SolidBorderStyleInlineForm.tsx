import { solidBorderStyleInlineFormData } from "Data/Forms/Control";
import Image from "next/image";
import { Card, Col, FormGroup, Input, Label, Media, Row } from "reactstrap";
import { ImgPath } from "utils/Constant";

const SolidBorderStyleInlineForm = () => {
  return (
    <form className="mega-inline border-style">
      <Row className="flex-column">
        {solidBorderStyleInlineFormData.map((data, index) => (
          <Col xs={12} key={index}>
            <Card>
              <Media className="p-20">
                <FormGroup check className="radio radio-primary">
                  <Input id={`solidBorderRadio-${index}`} type="radio" name="radio1"/>
                  <Label className="form-check-label my-0" htmlFor={`solidBorderRadio-${index}`}>
                    <Media body>
                      <span className="d-flex list-behavior-1">
                        <span className="flex-shrink-0">
                          <Image height={86} width={138} className="tab-img img-fluid" src={`${ImgPath}/${data.imagePath}`} alt="home"/>
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

export default SolidBorderStyleInlineForm;
