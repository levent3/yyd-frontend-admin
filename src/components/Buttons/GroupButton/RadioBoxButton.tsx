import { buttonPropsType } from "Types/ButtonsType";
import { Button, ButtonGroup, Col, Input, Label } from "reactstrap";

const RadioBoxButton = ({ btnItem }: buttonPropsType) => {
  return (
    <Col xxl={4} md={6} sm={12} className="box-col-6">
      <div className={btnItem.btnClass}>
        <ButtonGroup>
          <Button color={btnItem.colorClass}>
            <div className={btnItem.divClass}>
              <Input id={btnItem.id1} type="radio" name="radio1" value="option1"/>
              <Label htmlFor={btnItem.id1}>{btnItem.title1}</Label>
            </div>
          </Button>
          <Button color={btnItem.colorClass}>
            <div className={btnItem.divClass}>
              <Input id={btnItem.id2} type="radio" name="radio1" value="option1" defaultChecked/>
              <Label htmlFor={btnItem.id2}>{btnItem.title2}</Label>
            </div>
          </Button>
        </ButtonGroup>
      </div>
    </Col>
  );
};

export default RadioBoxButton;
