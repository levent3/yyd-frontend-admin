import { Col, Card, Table, Row } from "reactstrap";
import { TableHeadOptions, TableHeadOptionsSpan } from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import TableHeadClassTableBody from "./TableHeadClassTableBody";
import TableHeadClassTableHead from "./TableHeadClassTableHead";

const TableHeadClass = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonCardHeading Heading={TableHeadOptions} span={TableHeadOptionsSpan} />
        <Row className="card-block">
          <Col sm={12}>
            <div className="table-responsive">
              <Table>
                <TableHeadClassTableHead />
                <TableHeadClassTableBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default TableHeadClass;
