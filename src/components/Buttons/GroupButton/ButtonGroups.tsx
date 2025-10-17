import { Button, ButtonGroup } from "reactstrap";

const ButtonGroups = () => {
  return (
    <div className="m-b-30">
      <ButtonGroup>
        <Button color="primary">
          <i className="fa fa-bold"></i>
        </Button>
        <Button color="secondary">
          <i className="fa fa fa-italic"></i>
        </Button>
        <Button color="success">
          <i className="fa fa-file-image-o"></i>
        </Button>
        <Button color="info">
          <i className="fa fa-paperclip"></i>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroups;
