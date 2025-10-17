import { buyingOptionsData, verticalStyleFormData } from "Data/Forms/Control";
import { Card, Col, FormGroup, Input, Label, Media, Row } from "reactstrap";
import { BuyingOptionHeading, DeliveryOptionHeading, StartRatingHeading } from "utils/Constant";

const VerticalStyleForm = () => {
  return (
    <form className="mega-vertical">
      <Row>
        <Col sm={12}>
          <p className="mega-title m-b-5">{DeliveryOptionHeading}</p>
        </Col>
        {verticalStyleFormData.map((data, index) => (
          <Col sm={6} className="col-sm-6" key={index}>
            <Card>
              <Media className="p-20">
                <FormGroup check className={`radio radio-${data.className} m-0 w-100`}>
                  <Input id={`VerticalStyleForm-${index}`} type="radio" name="radio5"/>
                  <Label className="form-check-label mb-0 w-100" htmlFor={`VerticalStyleForm-${index}`}>
                    <Media body className="megaoption-space">
                      <span className="mt-0 mega-title-badge">
                        {data.deliveryType}
                        <span className={`badge badge-${data.className} pull-right digits`}>
                          {data.price}
                        </span>
                      </span>
                      <span>{data.text}</span>
                    </Media>
                  </Label>
                </FormGroup>
              </Media>
            </Card>
          </Col>
        ))}
        <Col sm={12}>
          <p className="mega-title m-b-5">{BuyingOptionHeading}</p>
        </Col>
        {buyingOptionsData.map((data, index) => (
          <Col sm={6} key={index}>
            <div className="card mb-0">
              <Media className="p-20">
                <FormGroup check className={`radio radio-${data.className} m-0 w-100`}>
                  <Input id={`buyingOptions-${index}`} type="radio" name="radio7"/>
                  <Label className="form-check-label mb-0 w-100" htmlFor={`buyingOptions-${index}`}>
                    <Media body>
                      <span className="mt-0 mega-title-badge">{data.tittle}
                        <span className={`badge badge-${data.className} pull-right digits`}>{data.price}</span>
                      </span>
                      <span className="rating-star-wrapper">
                        {data.starRating.map((star, index) => (<i key={index} className={`icofont icofont-star ${star}`}/>))}
                        {data.totalRating}{StartRatingHeading}
                      </span>
                    </Media>
                  </Label>
                </FormGroup>
              </Media>
            </div>
          </Col>
        ))}
      </Row>
    </form>
  );
};

export default VerticalStyleForm;
