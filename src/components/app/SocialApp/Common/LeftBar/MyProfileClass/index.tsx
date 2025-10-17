import { Card } from "reactstrap";
import { useState } from "react";
import { MyProfile } from "utils/Constant";
import MyProfileClassCollapse from "./MyProfileClassCollapse";
import HeaderWithIcon from "CommonElements/HeaderWithIcon";

const MyProfileClass = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
      <Card>
        <HeaderWithIcon Heading={MyProfile} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <MyProfileClassCollapse isFilter={isOpen}  />
      </Card>
  );
};

export default MyProfileClass;
