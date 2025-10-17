import { Col, Card, Table, Row } from "reactstrap";
import { BreckPointSpecific, BreckPointSpecificSpan } from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import BreckPointClassTableHead from "./BreckPointClassTableHead";
import BreckPointClassTableBody from "./BreckPointClassTableBody";

const BreckPointClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeading Heading={BreckPointSpecific} span={BreckPointSpecificSpan}/>
        <Row className="card-block">
          <Col sm={12} lg={12} xl={12}>
            <div className="table-responsive">
              <Table className="table-responsive-sm">
                <BreckPointClassTableHead />
                <BreckPointClassTableBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default BreckPointClass;
