import { Card } from "reactstrap";
import { Followers } from "utils/Constant";
import { useState } from "react";
import FollowerCardCollapse from "./FollowerCardCollapase";
import HeaderWithIcon from "CommonElements/HeaderWithIcon";

const FollowerCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={Followers} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <FollowerCardCollapse isFilter={isOpen} />
    </Card>
  );
};

export default FollowerCard;
