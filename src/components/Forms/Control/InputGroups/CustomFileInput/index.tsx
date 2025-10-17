import CardHead from "CommonElements/CardHead";
import { CustomFileInputHeadingData } from "Data/Forms/Control";
import { Card, Col } from "reactstrap";
import { CustomFileInputHeading } from "utils/Constant";
import CustomFileInputCardBody from "./CustomFileInputCardBody";

const CustomFileInput = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CardHead title={CustomFileInputHeading} subTitle={CustomFileInputHeadingData} />
        <CustomFileInputCardBody />
      </Card>
    </Col>
  );
};

export default CustomFileInput;
