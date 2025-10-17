import { Card, Col, CardBody, Button } from "reactstrap";
import { peopleYouMayKnowData } from "Data/SocialApp";
import { AddFriend, ImgPath } from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import Image from "next/image";
interface PropsType {
  Heading: string;
}
const PeopleYouMayKnow = ({ Heading }: PropsType) => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeading smallHeading={Heading} />
        <CardBody className="avatar-showcase">
          <div className="pepole-knows">
            <ul className="flex-wrap">
              {peopleYouMayKnowData.map((data, index) => (
                <li key={index}>
                  <div className="add-friend text-center">
                    <Image
                      width={60}
                      height={60}
                      className="img-60 img-fluid rounded-circle"
                      alt="user"
                      src={`${ImgPath}/${data.peopleImageName}`}
                    />
                    <span className="d-block">{data.peopleName}</span>
                    <Button color="primary" size="xs">
                      {AddFriend}
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PeopleYouMayKnow;
