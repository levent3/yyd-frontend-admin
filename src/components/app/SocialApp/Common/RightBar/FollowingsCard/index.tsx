import { Card } from "reactstrap";
import FollowingsCardCollapse from "./FollowingsCardCollapase";
import { useState } from "react";
import { Following } from "utils/Constant";
import HeaderWithIcon from "CommonElements/HeaderWithIcon";

const FollowingsCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={Following} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <FollowingsCardCollapse isFilter={isOpen} />
    </Card>
  );
};

export default FollowingsCard;
