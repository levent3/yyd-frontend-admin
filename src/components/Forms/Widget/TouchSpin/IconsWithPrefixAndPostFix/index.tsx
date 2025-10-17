import CardHead from "CommonElements/CardHead";
import { touchSpinHeaderData } from "Data/Forms/Widget";
import { Card, CardBody, Col } from "reactstrap";
import { IconsWithPrefixAndPostFixHeading } from "utils/Constant";
import CommonPrefixAndPostFix from "../common/PrefixAndPostFix";

const IconsWithPrefixAndPostFix = () => {
  return (
    <Col xl={6}>
      <Card>
        <CardHead title={IconsWithPrefixAndPostFixHeading} subTitle={touchSpinHeaderData}/>
        <CardBody className="common-flex pre-post-touchspin">
          <CommonPrefixAndPostFix postIcon />
          <CommonPrefixAndPostFix preIcon />
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconsWithPrefixAndPostFix;
