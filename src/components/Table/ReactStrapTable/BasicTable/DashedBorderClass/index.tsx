import { Col, Card, Table } from "reactstrap";
import { DashedBorder, DashedBorderSpan } from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import DashedBorderClassTableHead from "./DashedBorderClassTableHead";
import DashedBorderClassTableBody from "./DashedBorderClassTableBody";

const DashedBorderClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeading Heading={DashedBorder} span={DashedBorderSpan} />
        <div className="table-responsive">
          <Table className="table-dashed">
            <DashedBorderClassTableHead />
            <DashedBorderClassTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default DashedBorderClass;
