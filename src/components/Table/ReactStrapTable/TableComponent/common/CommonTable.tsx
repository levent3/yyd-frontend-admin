import CommonCardHeading from "CommonElements/CommonCardHeading";
import { Card, Col, Row } from "reactstrap";
import CommonTableBody from "./CommonTableBody";
import { commonTablePropsType } from "Types/TableType";

const CommonTable = ({ Heading, tableData,tableClassName ,tdClassName }: commonTablePropsType) => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeading Heading={Heading} />
        <div>
          <Row className="card-block">
            <Col sm={12} lg={12} xl={12}>
              <div className="table-responsive">
                <CommonTableBody tableData={tableData}  tableClassName={tableClassName}  tdClassName={tdClassName} /> 
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default CommonTable;
