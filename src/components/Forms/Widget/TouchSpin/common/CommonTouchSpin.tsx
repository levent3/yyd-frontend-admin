import { touchSpinPropsType } from "Types/FormType";
import TouchSpins from "./TouchSpins";
import { CardBody } from "reactstrap";

const CommonTouchSpin = ({ touchSpinClassNames,cardBodyClassName,arrowIcon,spinClassName }: touchSpinPropsType) => {
  return (
    <CardBody className={`common-flex ${cardBodyClassName?cardBodyClassName:""}`}>
      {touchSpinClassNames.map((data, index) => (
        <TouchSpins key={index} item={data} arrowIcon={arrowIcon} spinClassName={spinClassName} />
      ))}
    </CardBody>
  );
};

export default CommonTouchSpin;
