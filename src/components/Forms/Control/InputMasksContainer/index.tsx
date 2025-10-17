import CardHead from "CommonElements/CardHead";
import { inputMasksHeadingData } from "Data/Forms/Control";
import { Card, CardBody, Col, Row } from "reactstrap";
import { DefaultInputMask, InputMasks } from "utils/Constant";
import DateFormat from "./DateFormat";
import TimeFormat from "./TimeFormat";
import DefaultInputMaskForm from "./DefaultInputMaskForm";

const InputMasksContainer = () => {
  return (
    <Col xs={12}>
      <Card>
        <CardHead title={InputMasks} subTitle={inputMasksHeadingData} />
        <CardBody>
          <Row className=" g-3">
            <DateFormat />
            <TimeFormat />
            <Col xs={12}>
              <div className="card-wrapper border rounded-3 light-card checkbox-checked">
                <h6 className="sub-title">{DefaultInputMask}</h6>
                <DefaultInputMaskForm />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InputMasksContainer;
