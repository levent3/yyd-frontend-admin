import {
  stateSavingTableColumns,
  stateSavingTableData,
} from "Data/table/data-table";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Input, Label } from "reactstrap";
import StateSavingCardHeader from "./StateSavingCardHeader";
import { useMemo, useState } from "react";

const StateSaving = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = stateSavingTableData.filter(
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
      <Card className="main-zero-config main-state-table">
        <StateSavingCardHeader />
        <CardBody>
          <div className="table-responsive">
            <DataTable
              data={filteredItems}
              columns={stateSavingTableColumns}
              striped={true}
              pagination
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StateSaving;
