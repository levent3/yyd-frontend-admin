import { Col, Input, InputGroup, InputGroupText } from "reactstrap";
import { WrappingDetails, WrappingHeading } from "utils/Constant";

const Wrapping = () => {
  return (
    <Col xs={12}>
      <div className="card-wrapper border main-custom-form rounded-3 input-radius">
        <h6 className="sub-title fw-bold">{WrappingHeading} </h6>
        <p className="f-m-light mb-1" dangerouslySetInnerHTML={{ __html: WrappingDetails }} />
        <InputGroup className="flex-nowrap">
          <InputGroupText>@</InputGroupText>
          <Input type="text" placeholder="Username" />
        </InputGroup>
      </div>
    </Col>
  );
};

export default Wrapping;
