import { Col, Card, Table } from "reactstrap";
import {
  InverseTablePrimaryBackground,
  InverseTablePrimaryBackgroundSpan,
} from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import InversTableClassTableHead from "./InversTableClassTableHead";
import InversTableClassTableBody from "./InversTableClassTableBody";

const InversePrimaryClass = () => {
  return (
    <Col sm={12}>
      <Card className="main-inverse-table">
        <CommonCardHeading
          Heading={InverseTablePrimaryBackground}
          span={InverseTablePrimaryBackgroundSpan}
        />
        <div className="table-responsive">
          <Table striped className="bg-primary">
            <InversTableClassTableHead />
            <InversTableClassTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default InversePrimaryClass;
