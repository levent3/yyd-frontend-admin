import { CardBody, Table } from "reactstrap";
import { Course, Earnings, ImgPath, Sale } from "utils/Constant";
import WeeklySalesStatusTableBody from "./WeeklySalesStatusTableBody";

const WeeklySalesStatusCardBody = () => {
  return (
    <CardBody className="pt-0 sale-status-table ps-md-0">
      <div className="table-responsive">
        <Table>
          <thead>
            <tr>
              <th className="f-light f-w-500 pt-0">{Course}</th>
              <th className="f-light f-w-500 pt-0">{Sale}</th>
              <th className="f-light f-w-500 text-end pt-0"> {Earnings}</th>
            </tr>
          </thead>
          <WeeklySalesStatusTableBody />
        </Table>
      </div>
    </CardBody>
  );
};

export default WeeklySalesStatusCardBody;
