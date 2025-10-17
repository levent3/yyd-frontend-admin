import CommonCardHeading from "CommonElements/CommonCardHeading";
import { Card, CardBody, Col } from "reactstrap";
import { HtmlTableSpan, HtmlTableTittle } from "utils/Constant";
import DataTable from "react-data-table-component";
import {
  htmlColumns,
  htmlColumnsTableData,
} from "Data/table/data-table/DataSourcesData";

const HtmlSourcedData = () => {
  return (
    <Col sm={12}>
      <Card className="main-stock-wrapper">
        <CommonCardHeading
          headingClassName="pb-0 card-no-border"
          Heading={HtmlTableTittle}
          span={HtmlTableSpan}
          bigHeadingClassName="mb-3"
        />
        <CardBody>
          <div className="table-responsive">
            <DataTable
              data={htmlColumnsTableData}
              columns={htmlColumns}
              striped={true}
              pagination
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HtmlSourcedData;
