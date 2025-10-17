import { withoutBordersStyleForm } from "Data/Forms/Control";
import { Card, Col, FormGroup, Input, Label, Media, Row } from "reactstrap";
import { DollarSign } from '../../../../../../utils/Constant/index';

const WithoutBordersStyleForm = () => {
  return (
    <form className="mega-inline plain-style">
      <Row>
        {withoutBordersStyleForm.map((data, index) => (
          <Col sm={6} key={index}>
            <Card>
              <Media className="p-20">
                <FormGroup check className="checkbox checkbox-warning m-0">
                  <Input id={`checkbox${index}`} type="checkbox" defaultChecked={data.defaultChecked?true:false}/>
                  <Label className="form-check-label" htmlFor={`checkbox${index}`}>
                    <Media body className="megaoption-space">
                      <span className="mt-0 mega-title-badge">
                        {DollarSign}{data.price}
                        <span className={`badge badge-${data.className} pull-right digits`}>{data.badgeText}</span>
                      </span>
                      <span>{data.detail}</span>
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

export default WithoutBordersStyleForm;
