import { InverseTable, InverseTableSpan } from "utils/Constant";
import { Col, Card,  Table } from "reactstrap";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import InverseTableClassTableBody from "./InverseTableClassTableBody";
import InverseTableClassTableHead from "./InverseTableClassTableHead";

const InverseTableClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeading Heading={InverseTable} span={InverseTableSpan} />
        <div className="table-responsive">
          <Table className="table-inverse">
            <InverseTableClassTableHead />
            <InverseTableClassTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default InverseTableClass;
