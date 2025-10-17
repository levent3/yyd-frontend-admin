import { commonCardFooterPropsType } from "Types/FormsType";
import { Button, CardFooter } from "reactstrap";
import { Cancel, Submit } from "utils/Constant";

const CommonCardFooter = ({cardFooterClassName,cancelButtonClassName}:commonCardFooterPropsType) => {
  return (
    <CardFooter className={cardFooterClassName}>
      <Button color="primary" className="m-r-15">
        {Submit}
      </Button>
      <Button color={cancelButtonClassName? cancelButtonClassName:"light"}>{Cancel}</Button>
    </CardFooter>
  );
};

export default CommonCardFooter;
