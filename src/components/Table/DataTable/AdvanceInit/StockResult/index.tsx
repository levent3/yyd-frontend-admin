import {
  stockResultTableColumns,
  stockResultTableData,
} from "Data/table/data-table/AdvanceInitDataTable";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Input, Label } from "reactstrap";
import StockResultCardHeader from "./StockResultCardHeader";
import { useMemo, useState } from "react";

const StockResult = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = stockResultTableData.filter(
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
        <StockResultCardHeader />
        <CardBody className="main-stock-wrapper">
          <div className="table-responsive theme-scrollbar">
            <div id="stock_wrapper" className="dataTables_wrapper">
              <DataTable
                data={filteredItems}
                columns={stockResultTableColumns}
                striped={true}
                fixedHeader
                fixedHeaderScrollHeight="40vh"
                className="display dataTable"
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StockResult;
