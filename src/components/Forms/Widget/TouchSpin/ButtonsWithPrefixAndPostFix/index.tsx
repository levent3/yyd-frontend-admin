import CardHead from "CommonElements/CardHead";
import { Card, CardBody, Col } from "reactstrap";
import { ButtonsWithPrefixAndPostFixHeading } from "utils/Constant";
import CommonPrefixAndPostFix from "../common/PrefixAndPostFix";

const ButtonsWithPrefixAndPostFix = () => {
  const touchSpinHeaderData = [
    {
      text: "Use the",
      code: ".decrement-touchspin ",
    },
    {
      text: "and",
      code: ".increment-touchspin ",
    },
    { text: "class." },
  ];
  return (
    <Col xl={6}>
      <Card>
        <CardHead title={ButtonsWithPrefixAndPostFixHeading} subTitle={touchSpinHeaderData}/>
        <CardBody className="common-flex pre-post-touchspin">
          <CommonPrefixAndPostFix preButton differentColor />
          <CommonPrefixAndPostFix PostButton differentColor />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ButtonsWithPrefixAndPostFix;
