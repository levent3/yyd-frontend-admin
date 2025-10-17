import { CardBody, Table } from "reactstrap";
import { Task, completed, outOf } from "utils/Constant";
import TodayTaskTableBody from "./TodayTaskTableBody";

const TodayTaskCardBody = () => {
  return (
    <CardBody className="pt-0 task-table">
      <div className="main-task">
        <span className="text-muted">
          2 {Task}
          <span className="txt-success">{completed} <span className="text-muted"> {outOf} 12</span></span>
        </span>
        <div className="progress task-progress">
          <div className="progress-bar w-50 bg-success" role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}/>
        </div>
      </div>
      <div className="recent-table table-responsive currency-table task-table">
        <Table>
          <TodayTaskTableBody />
        </Table>
      </div>
    </CardBody>
  );
};

export default TodayTaskCardBody;
