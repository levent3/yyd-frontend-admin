import { Row, Col, Card, Table } from "reactstrap";
import { CustomTable, CustomTableSpan } from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import CustomeHoverTableHead from "./CustomeHoverTableHead";
import CustomeHoverTableBody from "./CustomeHoverTableBody";

const CustomHoverClass = () => {
  return (
    <Col sm={12}>
      <Card className="main-inverse-table">
        <CommonCardHeading Heading={CustomTable} span={CustomTableSpan} />
        <Row className="card-block">
          <Col sm={12} lg={12} xl={12}>
            <div className="table-responsive">
              <Table hover striped className="bg-primary">
                <CustomeHoverTableHead />
                <CustomeHoverTableBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};
export default CustomHoverClass;
