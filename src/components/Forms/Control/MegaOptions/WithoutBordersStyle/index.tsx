import CardHead from "CommonElements/CardHead";
import { withoutBordersStyleHeadingData } from "Data/Forms/Control";
import { Card, CardBody, Col } from "reactstrap";
import { WithoutBordersStyleHeading } from "utils/Constant";
import WithoutBordersStyleForm from "./WithoutBordersStyleForm";
import CommonCardFooter from "@/components/Forms/common/CommonCardFooter";

const WithoutBordersStyle = () => {
  return (
    <Col sm={12} xxl={6} className="box-col-6">
      <Card>
        <CardHead title={WithoutBordersStyleHeading} subTitle={withoutBordersStyleHeadingData}/>
        <CardBody>
          <WithoutBordersStyleForm />
        </CardBody>
        <CommonCardFooter cardFooterClassName="text-end" cancelButtonClassName="list-light-warning"/>
      </Card>
    </Col>
  );
};

export default WithoutBordersStyle;
