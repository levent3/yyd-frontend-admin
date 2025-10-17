import { horizontalStyleFormBuyingOptionsData, horizontalStyleFormData, } from "Data/Forms/Control";
import { Card, Col, FormGroup, Input, Label, Media, Row } from "reactstrap";
import { BuyingOption, DeliveryOptionHeading, StartRatingHeading, } from "utils/Constant";

const HorizontalStyleForm = () => {
  return (
    <form className="mega-horizontal">
      <Row>
        <Col sm={3}>
          <p className="mega-title">{DeliveryOptionHeading}</p>
        </Col>
        <Col sm={9}>
          {horizontalStyleFormData.map((data, index) => (
            <Card key={index}>
              <Media className="p-20">
                <FormGroup className={`form-check radio radio-${data.className} m-0 w-100`}>
                  <Input id={`horizontalStyleForm-${index}`} type="radio" name="radio22" />
                  <Label className="form-check-label mb-0 w-100" htmlFor={`horizontalStyleForm-${index}`}>
                    <Media body className="megaoption-space">
                      <span className="mt-0 mega-title-badge">
                        {data.deliveryType}
                        <span className={`badge badge-${data.className} pull-right digits`}>{data.price}</span>
                      </span>
                      <span>{data.text}</span>
                    </Media>
                  </Label>
                </FormGroup>
              </Media>
            </Card>
          ))}
        </Col>
        <Col sm={3}>
          <p className="mega-title">{BuyingOption}</p>
        </Col>
        {horizontalStyleFormBuyingOptionsData.map((data, index) => (
          <Col sm={9} className={data.colClassName ? data.colClassName : ""} key={index}>
            <Card>
              <Media className="p-20">
                <FormGroup check className={`radio radio-${data.className} m-0 w-100`}>
                  <Input id={`buyingOptionsHorizontal${index}`} type="radio" name="radio23" />
                  <Label className="form-check-label mb-0 w-100" htmlFor={`buyingOptionsHorizontal${index}`}>
                    <Media body>
                      <span className="mt-0 mega-title-badge">
                        {data.tittle}
                        <span className={`badge badge-${data.className} pull-right digits`}>{data.price}</span>
                      </span>
                      <span className="rating-star-wrapper">
                        {data.starRating.map((star, index) => (<i key={index} className={`icofont icofont-star ${star}`} />))}
                        {data.totalRating}{StartRatingHeading}
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

export default HorizontalStyleForm;
