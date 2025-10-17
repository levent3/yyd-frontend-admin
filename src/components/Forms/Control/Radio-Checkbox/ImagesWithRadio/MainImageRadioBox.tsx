import { imagesWithData } from "Data/Forms/Control";
import Image from "next/image";
import { Col, Input, Label, Row } from "reactstrap";
import { ImgPath } from "utils/Constant";

const MainImageRadioBox = () => {
  return (
    <Row className="g-3">
      {/* {imagesWithData.map((data, index) => (
        <Col xxl={3} sm={6}  key={index}>
          <div className="card-wrapper border rounded-3 checkbox-checked">
            <h6 className="sub-title">{data.tittle}</h6>
            <div className="img-checkbox">
              <Input name="radio6" className="main-img-cover form-check-input" id={`img-check-${index}`} type="radio" defaultChecked={data?.defaultChecked ? true : false} disabled={data?.disabled ? true : false}/>
              <Label className="form-check-label mb-0" htmlFor={`img-check-${index}`}>
                <Image width={220} height={220} src={`${ImgPath}/switch/${index + 5}.jpg`} alt="coffee-beans"/>
              </Label>
            </div>
          </div>
        </Col>
      ))} */}
      {imagesWithData.map(({ src, label, id, defaultChecked, disabled, alt }, index) => (
      <Col xxl="3" sm="6" key={index}>
        <div className="card-wrapper border rounded-3 checkbox-checked">
          <h6 className="sub-title">{label}</h6>
          <div className="img-checkbox">
            <Input className="main-img-cover" id={id} type="radio" name="radio6" defaultChecked={defaultChecked} disabled={disabled} />
            <Label className="mb-0" htmlFor={id} check>
              <Image width={220} height={220} src={`${ImgPath}/switch/${src}.jpg`} alt={alt} />
            </Label>
          </div>
        </div>
      </Col>
    ))}
    </Row>
  );
};

export default MainImageRadioBox;
