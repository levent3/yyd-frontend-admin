import CardHead from "CommonElements/CardHead";
import { verticalStyleHeaderData } from "Data/Forms/Control";
import { Card, Col, CardBody, Row } from "reactstrap";
import { VerticalStyleHeading } from "utils/Constant";
import VerticalStyleForm from "./VerticalStyleForm";
import CommonCardFooter from "@/components/Forms/common/CommonCardFooter";

const VerticalStyle = () => {
  return (
    <Col sm={12} xxl={6} className="box-col-12">
      <Card className=" height-equal">
        <CardHead title={VerticalStyleHeading} subTitle={verticalStyleHeaderData} />
        <CardBody>
          <VerticalStyleForm />
        </CardBody>
        <CommonCardFooter cardFooterClassName="text-end" />
      </Card>
    </Col>
  );
};

export default VerticalStyle;
