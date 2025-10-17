import CardHead from "CommonElements/CardHead";
import { solidBordersStyleForm } from "Data/Forms/Control";
import { Card, CardBody, Col } from "reactstrap";
import { SolidBorderStyleHeading } from "utils/Constant";
import SolidBorderStyleInlineForm from "./SolidBorderStyleInlineForm";
import CommonCardFooter from "@/components/Forms/common/CommonCardFooter";

const SolidBorderStyle = () => {
  return (
    <Col sm={12} xxl={6} className="box-col-6">
      <Card>
        <CardHead title={SolidBorderStyleHeading} subTitle={solidBordersStyleForm}/>
        <CardBody className="megaoptions-border-space-sm">
          <SolidBorderStyleInlineForm />
        </CardBody>
        <CommonCardFooter cardFooterClassName="text-end" />
      </Card>
    </Col>
  );
};

export default SolidBorderStyle;
