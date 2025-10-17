import { useState } from "react";
import { Card } from "reactstrap";
import { ActivityFeed } from "utils/Constant";
import ActivityFeedCollapse from "./ActivityFeedCollapase";
import HeaderWithIcon from "CommonElements/HeaderWithIcon";

const ActivityFeedClass = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={ActivityFeed} isOpen={isOpen} setIsOpen={setIsOpen} />
      <ActivityFeedCollapse isFilter={isOpen}/>
    </Card>
  );
};

export default ActivityFeedClass;
