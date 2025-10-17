import Charts from "react-apexcharts";
import { optionsColumn } from "../../../../Data/widgets/chart";
import { FinanceHeading } from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import { Card, CardBody, Col } from "reactstrap";

const Finance = () => {
  return (
    <Col xl={5} lg={12} className="box-col-12">
      <Card>
        <CommonCardHeading smallHeading={FinanceHeading} />
        <CardBody>
          <div className="chart-container column-container">
            <div id="columnchart">
              <Charts options={optionsColumn} series={optionsColumn.series} height={350} type="line"/>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Finance;
