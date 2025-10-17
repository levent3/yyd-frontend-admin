import CommonCardHeading from "CommonElements/CommonCardHeading";
import {
  filterDataTableColumns,
  filterDataTableData,
} from "Data/table/data-table/FilterTableData";
import { ChangeEvent, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Input } from "reactstrap";
import {
  CustomFilteringSearch,
  CustomFilteringSearchSpan,
} from "utils/Constant";
import TableSearchBar from "./TableSearchBar";

const CustomFiltering = () => {
  const [data, setData] = useState(filterDataTableData);
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(100);

  useEffect(() => {
    const filteredData = filterDataTableData.filter((item) => {
      const age = item.age;
      return age >= minAge && age <= maxAge;
    });

    setData(filteredData);
  }, [minAge, maxAge]);

  const handleMinAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMinAge(parseInt(event.target.value, 10));
  };

  const handleMaxAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMaxAge(parseInt(event.target.value, 10));
  };

  return (
    <Col sm={12}>
      <Card className="main-stock-wrapper">
        <CommonCardHeading
          headingClassName="pb-0 card-no-border"
          span={CustomFilteringSearchSpan}
          Heading={CustomFilteringSearch}
        />
        <CardBody className="custom-filter-main">
          <TableSearchBar
            handleMinAgeChange={handleMinAgeChange}
            handleMaxAgeChange={handleMaxAgeChange}
          />
          <div className="table-responsive user-datatable">
            <div id="datatable-range_wrapper" className="dataTables_wrapper">
              <DataTable
                data={data}
                columns={filterDataTableColumns}
                striped={true}
                pagination
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomFiltering;
