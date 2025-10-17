import CardHead from "CommonElements/CardHead";
import { studentValidationFormHeadingData } from "Data/Forms/Layout";
import { Card, Col, CardBody } from "reactstrap";
import { StudentValidationFormHeading } from "utils/Constant";
import StudentValidationFormCardBody from "./StudentValidationFormCardBody";

const StudentValidationForm = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CardHead title={StudentValidationFormHeading} subTitle={studentValidationFormHeadingData} />
        <CardBody className="custom-input">
          <StudentValidationFormCardBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default StudentValidationForm;
