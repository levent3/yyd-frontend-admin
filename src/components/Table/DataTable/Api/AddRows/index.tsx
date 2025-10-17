import CommonCardHeading from "CommonElements/CommonCardHeading";
import {
  addRowsTableColumns,
  addRowsTableData,
} from "Data/table/data-table/API";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Card, CardBody, Col } from "reactstrap";
import {
  AddNewRow,
  AddRowsHeading,
  AddRowsSpan1,
  AddRowsSpan2,
} from "utils/Constant";

const AddRows = () => {
  const [tableData, setTableData] = useState(addRowsTableData);
  const getRandomFloat = (min: number, max: number) => {
    const genrateRandom = Math.random() * (max - min) + min;
    return parseFloat(genrateRandom.toFixed(2));
  };

  const addNewRow = () => {
    const minimumValue = 10;
    const maximumValue = 100;
    const tempData = {
      column1: tableData[tableData.length - 1].column1 + 10,
      column2: getRandomFloat(minimumValue, maximumValue),
      column3: getRandomFloat(minimumValue, maximumValue),
      column4: getRandomFloat(minimumValue, maximumValue),
      column5: getRandomFloat(minimumValue, maximumValue),
    };
    setTableData([...tableData, tempData]);
  };
  return (
    <Col sm={12}>
      <Card className="main-stock-wrapper">
        <CommonCardHeading
          headingClassName="pb-0 card-no-border"
          span={AddRowsSpan1}
          span2={AddRowsSpan2}
          Heading={AddRowsHeading}
        />
        <CardBody>
          <Button color="primary" className="mb-3" onClick={addNewRow}>
            {AddNewRow}
          </Button>
          <div className="table-responsive">
            <div id="API-1_wrapper" className="dataTables_wrapper">
              <DataTable
                data={tableData}
                columns={addRowsTableColumns}
                striped={true}
                pagination
                className="display dataTable"
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AddRows;
