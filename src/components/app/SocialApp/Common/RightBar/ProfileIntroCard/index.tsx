import { Card } from "reactstrap";
import { useState } from "react";
import { ProfileIntro } from "utils/Constant";
import ProfileIntroCollapse from "./ProfileIntroCollapase";
import HeaderWithIcon from "CommonElements/HeaderWithIcon";

const ProfileIntroCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={ProfileIntro} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <ProfileIntroCollapse isFilter={isOpen} />
    </Card>
  );
};

export default ProfileIntroCard;
