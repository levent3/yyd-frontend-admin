import CardHead from "CommonElements/CardHead";
import { horizontalStyleHeaderData } from "Data/Forms/Control";
import { Col, Card, CardBody } from "reactstrap";
import { HorizontalStyleHeading } from "utils/Constant";
import HorizontalStyleForm from "./HorizontalStyleForm";
import CommonCardFooter from "@/components/Forms/common/CommonCardFooter";

const HorizontalStyle = () => {
  return (
    <Col sm={12} xxl={6} className="box-col-12">
      <Card className="height-equal">
        <CardHead title={HorizontalStyleHeading} subTitle={horizontalStyleHeaderData} />
        <CardBody>
          <HorizontalStyleForm />
        </CardBody>
        <CommonCardFooter cardFooterClassName="text-end" />
      </Card>
    </Col>
  );
};

export default HorizontalStyle;
