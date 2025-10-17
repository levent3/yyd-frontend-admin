import {ZeroConfigurationTableData,childRowsTableColumns,} from "Data/table/data-table";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import ExpandedComponent from "./ExpandedComponent";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import { ChildrenRows, ChildrenRowsSpan } from "utils/Constant";

const ChildRows = () => {
  return (
    <Col sm={12}>
      <Card className="main-stock-wrapper">
        <CommonCardHeading headingClassName="pb-0 card-no-border" span={ChildrenRowsSpan} Heading={ChildrenRows}/>
        <CardBody>
          <div className="table-responsive">
            <div id="API-chield-row_wrapper" className="dataTables_wrapper">
              <DataTable data={ZeroConfigurationTableData} columns={childRowsTableColumns} striped={true} pagination expandableRows highlightOnHover className="display" expandableRowsComponent={ExpandedComponent}/>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ChildRows;
