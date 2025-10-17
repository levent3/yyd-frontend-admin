import { useCallback, useState } from "react";
import NavComponent from "./NavComponent";
import BusinessVerticalWizardTabContent from "./BusinessVerticalWizardTabContent";
import { Card, CardBody, Col, Row } from "reactstrap";
import { businessFormpropsType } from "Types/FormType";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const BusinessVerticalWizard = ({heading,firstXl,secondXl,xs,horizontalWizardWrapperClassName,}: businessFormpropsType) => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
    setActiveTab(tab);
  }, []);
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeading Heading={heading} />
        <CardBody>
          <div className={`horizontal-wizard-wrapper  vertical-variations ${horizontalWizardWrapperClassName? horizontalWizardWrapperClassName: ""}`}>
            <Row className="g-3">
              <Col xs={xs} xl={firstXl} className="main-horizontal-header">
                <NavComponent callbackActive={callback} activeTab={activeTab} />
              </Col>
              <Col xs={xs} xl={secondXl}>
                <BusinessVerticalWizardTabContent activeTab={activeTab} callbackActive={callback}/>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BusinessVerticalWizard;
