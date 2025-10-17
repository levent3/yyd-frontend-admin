import { buttonPropsType } from "Types/ButtonsType";
import { Button, ButtonGroup, Col, Input, Label } from "reactstrap";
import { Option1, Option2 } from "utils/Constant";

const CheckBoxButton = ({ btnItem }: buttonPropsType) => {
  return (
    <Col xxl={4} md={6} sm={12} className="box-col-6">
      <ButtonGroup className={btnItem.btnClass} data-toggle="buttons">
        <Button color={btnItem.colorClass}>
          <div className={btnItem.divClass}>
            <Input id={btnItem.id1} type="checkbox" />
            <Label htmlFor={btnItem.id1}>{Option1}</Label>
          </div>
        </Button>
        <Button color={btnItem.colorClass}>
          <div className={btnItem.divClass}>
            <Input id={btnItem.id2} type="checkbox" />
            <Label htmlFor={btnItem.id2}>{Option2}</Label>
          </div>
        </Button>
      </ButtonGroup>
    </Col>
  );
};

export default CheckBoxButton;
