import CardHead from "CommonElements/CardHead";
import { defaultStyleHeadingData } from "Data/Forms/Control";
import { Card, CardBody, Col } from "reactstrap";
import { DefaultStyleHeading } from "utils/Constant";
import DefaultStyleForm from "./DefaultStyleForm";
import CommonCardFooter from "@/components/Forms/common/CommonCardFooter";

const DefaultStyle = () => {
  return (
    <Col sm={12} xxl={6} className="box-col-6">
      <Card>
        <CardHead title={DefaultStyleHeading} subTitle={defaultStyleHeadingData}/>
        <CardBody className="megaoptions-border-space-sm">
          <DefaultStyleForm />
        </CardBody>
        <CommonCardFooter cardFooterClassName="text-end" />
      </Card>
    </Col>
  );
};

export default DefaultStyle;
