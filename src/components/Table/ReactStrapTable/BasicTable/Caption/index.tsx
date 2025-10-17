import { Col, Card, Table, Row } from "reactstrap";
import { Caption, CaptionSpan } from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import CaptionClassTableHead from "./CaptionClassTableHead";
import CaptionClassTableBody from "./CaptionClassTableBody";

const CaptionClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeading Heading={Caption} span={CaptionSpan} />
        <Row className="card-block">
          <Col sm={12} lg={12} xl={12}>
            <div className="table-responsive">
              <Table>
                <CaptionClassTableHead />
                <CaptionClassTableBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default CaptionClass;
