import CommonCardHeading from "CommonElements/CommonCardHeading";
import { Col, Card, Table } from "reactstrap";
import { HoverableRowsWithHorizontalBorder, HoverableRowsWithHorizontalBorderSpan, } from "utils/Constant";
import HoverableRowsTableHead from "./HoverableRowsTableHead";
import HoverableRowsTableBody from "./HoverableRowsTableBody";

const HoverableRowsClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeading Heading={HoverableRowsWithHorizontalBorder} span={HoverableRowsWithHorizontalBorderSpan} />
        <div className="table-responsive signal-table">
          <Table hover={true} className="table-border-horizontal">
            <HoverableRowsTableHead />
            <HoverableRowsTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default HoverableRowsClass;
