import CommonCardHeading from "CommonElements/CommonCardHeading";
import {
  ajaxSourcedColumns,
  ajaxSourcedData,
} from "Data/table/data-table/DataSourcesData";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import { AjaxSourcedDataHeading, AjaxTableSpan } from "utils/Constant";

const AjaxSourcedData = () => {
  return (
    <Col sm={12}>
      <Card className="main-stock-wrapper">
        <CommonCardHeading
          headingClassName="pb-0 card-no-border"
          Heading={AjaxSourcedDataHeading}
          span={AjaxTableSpan}
          bigHeadingClassName="mb-3"
        />
        <CardBody>
          <div className="table-responsive">
            <DataTable
              data={ajaxSourcedData}
              columns={ajaxSourcedColumns}
              striped={true}
              pagination
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AjaxSourcedData;
