import { CardHeader, Col } from "reactstrap";
import { WeeklySalesStatusHeading } from "utils/Constant";
import WeeklySalesStatusCardBody from "./WeeklySalesStatusCardBody";
import CommonDrop from "../../CommonDrop";

const WeeklySalesStatus = () => {
  return (
    <Col md={6} className="px-0 d-xxl-block d-xl-none">
      <CardHeader className="card-no-border">
        <div className="header-top">
          <h5>{WeeklySalesStatusHeading}</h5>
          <div className="dropdown icon-dropdown">
            <CommonDrop />
          </div>
        </div>
      </CardHeader>
      <WeeklySalesStatusCardBody />
    </Col>
  );
};

export default WeeklySalesStatus;
