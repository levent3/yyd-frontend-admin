import { useState } from "react";
import { Button, Card,  Col, Collapse } from "reactstrap";
import JobTitleCheckBox from "./JobTitleCheckBox";
import HeaderWithIcon from "CommonElements/HeaderWithIcon";
import { AllJobTitle, JobHeading } from "utils/Constant";

const JobTitleClass = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12}>
      <Card>
        <HeaderWithIcon Heading={JobHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
          <JobTitleCheckBox />
          <Button className="btn-block text-center" color="primary" type="button">
            {AllJobTitle}
          </Button>
        </Collapse>
      </Card>
    </Col>
  );
};

export default JobTitleClass;
