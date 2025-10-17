import CommonCardHeading from "CommonElements/CommonCardHeading";
import {
  rowCreateCallBackTableColumns,
  rowCreateCallBackTableData,
} from "Data/table/data-table/AdvanceInitDataTable";
import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Input, Label } from "reactstrap";
import {
  RowCreateCallBackHeading,
  RowCreateCallBackSpan,
} from "utils/Constant";

const RowCreateCallback = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = rowCreateCallBackTableData.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
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
            placeholder="search name"
          />
        </Label>
      </div>
    );
  }, [filterText]);
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeading
          headingClassName="pb-0 card-no-border"
          span={RowCreateCallBackSpan}
          Heading={RowCreateCallBackHeading}
        />
        <CardBody className="main-stock-wrapper">
          <div className="table-responsive theme-scrollbar" id="row_create">
            <DataTable
              data={filteredItems}
              columns={rowCreateCallBackTableColumns}
              striped={true}
              pagination
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

export default RowCreateCallback;
