import { Button, CardFooter, Col, Input } from "reactstrap";
import { Submit } from "utils/Constant";

const CommonCardFooter = () => {
  return (
    <CardFooter className="text-end">
      <Col sm={9} className="offset-sm-3">
        <Button color="primary" className="me-3" type="submit">
          {Submit}
        </Button>
        <input className="btn btn-light" type="reset" defaultValue="Cancel" />
      </Col>
    </CardFooter>
  );
};

export default CommonCardFooter;
