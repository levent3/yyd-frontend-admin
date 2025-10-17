import { Button, CardHeader } from "reactstrap";
import { ChevronDown, ChevronUp } from "react-feather";
import { headerWithIconPropsTypes } from "Types/CommonElementType";


const HeaderWithIcon = ({ setIsOpen, isOpen, Heading }: headerWithIconPropsTypes) => {
  return (
    <CardHeader>
      <h2 className="mb-0">
        <Button
          className="btn-link btn-block text-start d-flex justify-content-between"
          onClick={() => setIsOpen(!isOpen)}
          color="transperant"
        >
          {Heading}
          {isOpen ? (
            <ChevronUp className="m-0" />
          ) : (
            <ChevronDown className="m-0" />
          )}
        </Button>
      </h2>
    </CardHeader>
  );
};

export default HeaderWithIcon;
