import { Col, Card,  Table } from "reactstrap";
import {BasicTableWithBorderBottomColor,BasicTableWithBorderBottomColorSpan,} from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import BasicTableClassTableHead from "./BasicTableClassTableHead";
import BasicTableClassTableBody from "./BasicTableClassTableBody";

const BasicTableClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeading Heading={BasicTableWithBorderBottomColor} span={BasicTableWithBorderBottomColorSpan}/>
        <div className="table-responsive">
          <Table>
            <BasicTableClassTableHead />
            <BasicTableClassTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default BasicTableClass;
