import { Button, ButtonGroup, Card, CardBody, Col } from "reactstrap";
import { ButtonHeading, Vertical, VerticalButtonSpan } from "utils/Constant";
import CardHead from "CommonElements/CardHead";
import CommonDropDown from "../common/CommonDropDown";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const VerticalBtnGroup = () => {
  return (
    <Col md={6}>
      <Card className="height-equal" style={{ minHeight: "411px" }}>
        <CommonCardHeading smallHeading={Vertical}  span={VerticalButtonSpan} />
        <CardBody className="btn-group-wrapper">
          <ButtonGroup vertical>
            <Button color="primary">{ButtonHeading}</Button>
            <Button color="secondary">{ButtonHeading}</Button>
            <ButtonGroup>
              <CommonDropDown color="success" />
            </ButtonGroup>
            <Button color="info" className="b-r-0">
              {ButtonHeading}
            </Button>
            <Button color="warning" type="button" className="b-r-0">
              {ButtonHeading}
            </Button>
            <CommonDropDown color="danger" className="b-r-0" />
            <CommonDropDown color="light" />
          </ButtonGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default VerticalBtnGroup;
