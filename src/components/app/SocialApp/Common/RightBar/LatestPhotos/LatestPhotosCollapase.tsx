import Image from "next/image";
import { CardBody, Collapse } from "reactstrap";
import { ImgPath } from "utils/Constant";
interface propsType {
  isFilter: boolean;
}
const LatestPhotosCollapse = ({ isFilter }: propsType) => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="photos filter-cards-view">
        <ul className="text-center ">
          {numbers.map((data, index) => (
            <li key={index}>
              <div className="latest-post">
                <Image
                  width={70}
                  height={70}
                  className="img-fluid"
                  alt="user"
                  src={`${ImgPath}/social-app/post-${data}.png`}
                />
              </div>
            </li>
          ))}
        </ul>
      </CardBody>
    </Collapse>
  );
};

export default LatestPhotosCollapse;
