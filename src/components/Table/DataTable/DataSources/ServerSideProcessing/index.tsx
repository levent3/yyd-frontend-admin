import CommonCardHeading from "CommonElements/CommonCardHeading";
import {
  serverSideData,
  serverSideProcessingColumns,
} from "Data/table/data-table/DataSourcesData";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import {
  ServerSideProcessingHeading,
  ServerSideProcessingSpan1,
  ServerSideProcessingSpan2,
} from "utils/Constant";

const ServerSideProcessing = () => {
  return (
    <Col sm={12}>
      <Card className="main-stock-wrapper">
        <CommonCardHeading
          headingClassName="pb-0 card-no-border"
          Heading={ServerSideProcessingHeading}
          span={ServerSideProcessingSpan1}
          span2={ServerSideProcessingSpan2}
          bigHeadingClassName="mb-3"
        />
        <CardBody>
          <div className="table-responsive">
            <DataTable
              data={serverSideData}
              columns={serverSideProcessingColumns}
              striped={true}
              pagination
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ServerSideProcessing;
