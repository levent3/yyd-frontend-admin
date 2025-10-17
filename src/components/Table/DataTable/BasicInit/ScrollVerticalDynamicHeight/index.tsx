import CommonCardHeading from "CommonElements/CommonCardHeading";
import {
  scrollVerticalDynamicHeightColumns,
  scrollVerticalDynamicHeightData,
} from "Data/table/data-table";
import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, Col, CardBody, Label, Input } from "reactstrap";
import {
  DynamicHeight,
  DynamicHeightSpan1,
  DynamicHeightSpan2,
} from "utils/Constant";

const ScrollVerticalDynamicHeight = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = scrollVerticalDynamicHeightData.filter(
    (item) =>
      item.position &&
      item.position.toLowerCase().includes(filterText.toLowerCase())
  );
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div className="dataTables_filter">
        <Label>
          Search:
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFilterText(e.target.value)
            }
            type="search"
            value={filterText}
            placeholder="search position"
          />
        </Label>
      </div>
    );
  }, [filterText]);
  return (
    <Col sm={12}>
      <Card className="main-zero-config">
        <CommonCardHeading
          headingClassName="pb-0 card-no-border"
          Heading={DynamicHeight}
          span={DynamicHeightSpan1}
          span2={DynamicHeightSpan2}
        />
        <CardBody>
          <div className="table-responsive user-datatable">
            <DataTable
              data={filteredItems}
              columns={scrollVerticalDynamicHeightColumns}
              striped={true}
              fixedHeader
              fixedHeaderScrollHeight="40vh"
              className="display dataTable"
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollVerticalDynamicHeight;
