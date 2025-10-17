import { useCallback, useState } from "react";
import NavComponent from "./NavComponent";
import CustomHorizontalWizardFormTabContent from "./CustomHorizontalWizardFormTabContent";
import { Card, CardBody, Col, Row } from "reactstrap";
import { customWizardFormPropsType } from "Types/FormType";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const CustomHorizontalWizard = ({
  heading,
  horizontalWizardWrapperClassName,
  xs,
  firstXl,
  secondXl,
  diffrentId,
  colClass,
}: customWizardFormPropsType) => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
    setActiveTab(tab);
  }, []);
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeading Heading={heading} />
        <CardBody>
          <div
            className={`horizontal-wizard-wrapper ${horizontalWizardWrapperClassName}`}
          >
            <Row className="g-3">
              <Col
                xl={firstXl}
                xs={xs}
                className={`main-horizontal-header ${colClass ? colClass : ""}`}
              >
                <NavComponent callbackActive={callback} activeTab={activeTab} />
              </Col>
              <Col xl={secondXl} xs={xs}>
                <CustomHorizontalWizardFormTabContent
                  activeTab={activeTab}
                  callbackActive={callback}
                  diffrentId={diffrentId}
                />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomHorizontalWizard;
