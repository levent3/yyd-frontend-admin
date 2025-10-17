import { CardBody, Col, Card } from "reactstrap";
import { ActivityLogHeading } from "utils/Constant";
import MyActivity from "../Common/MyActivity";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const ActivityLog = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeading Heading={ActivityLogHeading} />
        <CardBody>
          <div className="activity-log">
            <MyActivity Heading="Today" />
            <MyActivity Heading="25 December" />
            <MyActivity Heading="8 september" />
            <MyActivity Heading="6 June" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActivityLog;
