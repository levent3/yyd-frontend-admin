import { CardBody } from "reactstrap";
import SkewedSwitch from "./SkewedSwitch";
import FlipSwitch from "./FlipSwitch";
import DifferentSwitches from "./DifferentSwitches";

const VariationOfSwitchesCardBody = () => {
  return (
    <CardBody className="switch-wrapper">
      <ul className="tg-list common-flex">
        <SkewedSwitch />
        <FlipSwitch />
        <DifferentSwitches />
      </ul>
    </CardBody>
  );
};

export default VariationOfSwitchesCardBody;
