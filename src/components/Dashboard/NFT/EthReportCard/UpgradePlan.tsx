import Image from "next/image";
import { Button, Card, CardBody, CardHeader, Col } from "reactstrap";
import {
  ImgPath,
  UpgradeNow,
  UpgradeYourPlan,
  UpgradeYourPlanParagraph,
} from "utils/Constant";

const UpgradePlan = () => {
  return (
    <Col xl={12} md={6} className="box-col-6">
      <Card className="mobile-app-card upgrade-plan widget-hover main-plan">
        <CardHeader className="card-no-border pb-0">
          <h5 className="mb-1">{UpgradeYourPlan}</h5>
          <p className="f-light mb-2">{UpgradeYourPlanParagraph}</p>
          <Button
            color="primary"
            className="purchase-btn  btn-hover-effect f-w-500"
          >
            {UpgradeNow}
          </Button>
        </CardHeader>
        <CardBody className="p-0 text-end">
          <Image
            src={`${ImgPath}/dashboard-6/1.gif`}
            width={150}
            height={150}
            alt="gif"
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default UpgradePlan;
