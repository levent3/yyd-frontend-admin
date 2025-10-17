import CardHead from "CommonElements/CardHead";
import { verticalValidationWizardHeadingData } from "Data/Forms/Layout";
import { Card, CardBody, Col, Nav, Row } from "reactstrap";
import { verticalValidationWizardHeading } from "utils/Constant";
import NavComponent from "./NavComponent";
import { useCallback, useState } from "react";
import VerticalValidationWizardTabComponent from "./VerticalValidationWizardTabComponent";

const VerticalValidationWizard = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeCallBack = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);

  return (
    <Col md={12}>
      <Card>
        <CardHead
          title={verticalValidationWizardHeading}
          subTitle={verticalValidationWizardHeadingData}
        />
        <CardBody>
          <div className="vertical-main-wizard">
            <Row className="g-3">
              <Col xxl={3} xl={4} xs={12}>
                <NavComponent callbackActive={activeCallBack} activeTab={activeTab} />
              </Col>
              <Col xxl={9} xl={8} xs={12}>
                <VerticalValidationWizardTabComponent activeTab={activeTab} activeCallBack={activeCallBack} />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalValidationWizard;
