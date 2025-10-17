import { Button, ButtonGroup } from "reactstrap";

const LargeButtonGroups = () => {
  return (
    <div className="m-b-30">
      <ButtonGroup>
        <Button color="primary" size="lg">
          <i className="fa fa-bold"></i>
        </Button>
        <Button color="secondary" size="lg">
          <i className="fa fa fa-italic"></i>
        </Button>
        <Button color="success" size="lg">
          <i className="fa fa-file-image-o"></i>
        </Button>
        <Button color="info" size="lg">
          <i className="fa fa-paperclip"></i>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default LargeButtonGroups;
