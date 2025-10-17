import { Card, CardBody,  Collapse } from "reactstrap";
import { Friends } from "utils/Constant";
import { useState } from "react";
import HeaderWithIcon from "CommonElements/HeaderWithIcon";
import Image from "next/image";
import { ImgPath } from "utils/Constant";

const FriendsCard = () => {
  const [isOpen, setIsOpen] = useState(true);
  let friendsImageName = ["3.jpg","5.jpg","1.jpg","2.png","3.png","6.jpg","10.jpg","14.png","1.jpg","4.jpg","11.png","8.jpg",];

  return (
    <Card>
      <HeaderWithIcon Heading={Friends} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Collapse isOpen={isOpen}>
        <CardBody className="avatar-showcase filter-cards-view">
          {friendsImageName.map((data, index) => (
            <div className="d-inline-block friend-pic" key={index}>
              <Image
                width={50}
                height={50}
                className="img-50 rounded-circle"
                src={`${ImgPath}/user/${data}`}
                alt="images"
              />
            </div>
          ))}
        </CardBody>
      </Collapse>
    </Card>
  );
};

export default FriendsCard;
