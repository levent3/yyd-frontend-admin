import CommonCardHeading from "CommonElements/CommonCardHeading";
import {
  ajaxSourcedColumns,
  javascriptSourcedData,
} from "Data/table/data-table/DataSourcesData";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import {
  JavaScriptTableSpan1,
  JavaScriptTableSpan2,
  JavascriptSourcedDataHeading,
} from "utils/Constant";

const JavaScriptSourcedData = () => {
  return (
    <Col sm={12}>
      <Card className="main-stock-wrapper">
        <CommonCardHeading
          headingClassName="pb-0 card-no-border"
          Heading={JavascriptSourcedDataHeading}
          span={JavaScriptTableSpan1}
          span2={JavaScriptTableSpan2}
          bigHeadingClassName="mb-3"
        />
        <CardBody>
          <div className="table-responsive">
            <DataTable
              data={javascriptSourcedData}
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

export default JavaScriptSourcedData;
