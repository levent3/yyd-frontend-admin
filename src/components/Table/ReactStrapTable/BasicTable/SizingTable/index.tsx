import { Col, Card, Table, Row } from "reactstrap";
import { sizeTable, sizeTableSpan } from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import SizingTableBody from "./SizingTableBody";
import SizingTableHead from "./SizingTableHead";

const SizingTable = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeading Heading={sizeTable} span={sizeTableSpan} />
        <Row className="card-block">
          <Col sm={12} lg={12} xl={12}>
            <div className="table-responsive">
              <Table size="lg">
                <SizingTableHead />
                <SizingTableBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default SizingTable;
