import CommonCardHeading from "CommonElements/CommonCardHeading";
import {
  ZeroConfigurationTableColumns,
  ZeroConfigurationTableData,
} from "Data/table/data-table";
import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Input, Label } from "reactstrap";
import {
  ZeroConfigurationHeading,
  ZeroConfigurationSpan,
  ZeroConfigurationSpan2,
} from "utils/Constant";

const ZeroConfiguration = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = ZeroConfigurationTableData.filter(
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
          Heading={ZeroConfigurationHeading}
          span={ZeroConfigurationSpan}
          span2={ZeroConfigurationSpan2}
        />
        <CardBody>
          <div className="table-responsive">
            <DataTable
              columns={ZeroConfigurationTableColumns}
              data={filteredItems}
              pagination
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              selectableRows
              persistTableHead
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ZeroConfiguration;
