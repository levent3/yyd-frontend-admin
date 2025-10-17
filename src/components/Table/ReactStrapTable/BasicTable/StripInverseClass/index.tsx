import { Col, Card, Table, Row } from "reactstrap";
import { StripedRowWithInverseTable, StripedRowWithInverseTableSpan, } from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import StripInverseClassTableBody from "./StripInverseClassTableBody";
import StripInverseClassTableHead from "./StripInverseClassTableHead";

const StripeInverseClass = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonCardHeading Heading={StripedRowWithInverseTable} span={StripedRowWithInverseTableSpan} />
        <Row className="card-block">
          <Col sm={12} lg={12} xl={12}>
            <div className="table-responsive">
              <Table striped className="table-inverse">
                <StripInverseClassTableHead />
                <StripInverseClassTableBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default StripeInverseClass;
