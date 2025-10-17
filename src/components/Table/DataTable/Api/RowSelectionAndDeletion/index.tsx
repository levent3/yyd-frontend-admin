import CommonCardHeading from "CommonElements/CommonCardHeading";
import {
  deleteDataTableColumns,
  deleteRowData,
} from "Data/table/data-table/DeleteTableRows";
import { useCallback, useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Card, CardBody, Col } from "reactstrap";
import {
  DeleteRow,
  DeleteSelectData,
  RowsSelectionAndDeletion,
  RowsSelectionSpan,
} from "utils/Constant";

const RowSelectionAndDeletion = () => {
  const [data, setData] = useState(deleteRowData);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const handleRowSelected = useCallback((state: any) => {
    setSelectedRows(state.selectedRows);
  }, []);
  const handleDelete = () => {
    if (
      window.confirm(
        `Are you sure you want to delete:\r ${selectedRows.map(
          (r: deleteRowData) => r.name
        )}?`
      )
    ) {
      setToggleCleared(!toggleCleared);
      setData(
        data.filter((item) =>
          selectedRows.filter((elem: deleteRowData) => elem.id === item.id)
            .length > 0
            ? false
            : true
        )
      );
      setSelectedRows("");
    }
  };
  return (
    <Col sm={12}>
      <Card className="main-stock-wrapper">
        <CommonCardHeading
          headingClassName="pb-0 card-no-border"
          span={RowsSelectionSpan}
          Heading={RowsSelectionAndDeletion}
        />
        <CardBody>
          <div className="table-responsive">
            {selectedRows.length !== 0 && (
              <>
                <h4 className="text-muted  m-0">{DeleteSelectData}</h4>
                <Button
                  color="secondary"
                  onClick={handleDelete}
                  className="my-3"
                >
                  {DeleteRow}
                </Button>
              </>
            )}
            <div className="dataTables_wrapper">
              <DataTable
                data={data}
                columns={deleteDataTableColumns}
                striped={true}
                pagination
                selectableRows
                onSelectedRowsChange={handleRowSelected}
                clearSelectedRows={toggleCleared}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RowSelectionAndDeletion;
