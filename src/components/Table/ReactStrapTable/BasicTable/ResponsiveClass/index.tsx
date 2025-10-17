import CommonCardHeading from "CommonElements/CommonCardHeading";
import { Col, Card, Table, Row } from "reactstrap";
import ResponsiveClassTableBody from "./ResponsiveClassTableBody";
import ResponsiveClassTableHead from "./ResponsiveClassTableHead";
import { ResponsiveTables, ResponsiveTablesSpan } from "utils/Constant";

const ResponsiveClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeading Heading={ResponsiveTables} span={ResponsiveTablesSpan}/>
        <Row className="card-block">
          <Col sm={12} lg={12} xl={12}>
            <div className="table-responsive">
              <Table className="table-light">
                <ResponsiveClassTableHead />
                <ResponsiveClassTableBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default ResponsiveClass;
