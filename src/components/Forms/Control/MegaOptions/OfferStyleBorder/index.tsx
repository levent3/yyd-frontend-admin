import CardHead from "CommonElements/CardHead";
import { offerStyleBorderHeaderData } from "Data/Forms/Control";
import { Card, CardBody, Col } from "reactstrap";
import { offerStyleBorderHeading } from "utils/Constant";
import OfferStyleBorderForm from "./OfferStyleBorderForm";
import CommonCardFooter from "@/components/Forms/common/CommonCardFooter";

const OfferStyleBorder = () => {
  return (
    <Col sm={12} xxl={6} className="box-col-6">
      <Card>
        <CardHead title={offerStyleBorderHeading} subTitle={offerStyleBorderHeaderData}/>
        <CardBody className="megaoptions-border-space-sm">
          <OfferStyleBorderForm />
        </CardBody>
        <CommonCardFooter cardFooterClassName="text-end" cancelButtonClassName="list-light-success"/>
      </Card>
    </Col>
  );
};

export default OfferStyleBorder;
