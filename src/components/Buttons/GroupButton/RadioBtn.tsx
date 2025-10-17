import { Row, Col, Card, CardBody } from "reactstrap";
import { radioBtnData } from "Data/Buttons/GroupButtonsData";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import CheckBoxButton from "./CheckBoxButton";
import RadioBoxButton from "./RadioBoxButton";

const RadioBtnClass = () => {
  return (
    <Col xs={12}>
      {radioBtnData.map((item, i) => (
        <Card key={i}>
          <CommonCardHeading smallHeading={item.title} span={item.span} />
          <CardBody className="btn-group-showcase radio-checkbox">
            <Row>
              {item.btnSub.map((btnItem, i) =>
                btnItem.checkBox ? (
                  <CheckBoxButton btnItem={btnItem} key={i} />
                ) : (
                  <RadioBoxButton btnItem={btnItem} key={i} />
                )
              )}
            </Row>
          </CardBody>
        </Card>
      ))}
    </Col>
  );
};

export default RadioBtnClass;
