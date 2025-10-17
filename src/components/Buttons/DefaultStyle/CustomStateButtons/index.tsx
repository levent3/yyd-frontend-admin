import CommonButtonsToolTip from "../../common/CommonButtonsToolTip";
import { ButtonTittle, CustomButtons, CustomButtonsSpan, Href, Link } from "utils/Constant";
import { Button, Card, CardBody, Input } from "reactstrap";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const CustomStateButtons = () => {
  return (
    <Card>
      <CommonCardHeading smallHeading={CustomButtons} span={CustomButtonsSpan}/>
      <CardBody className="common-flex">
        <a className="btn btn-primary" id="TooltipExample" href={Href}>{Link}</a>
        <CommonButtonsToolTip id="TooltipExample" toolTipText="link" />
        <Input className="btn btn-secondary w-auto" type="button" defaultValue="Input" id="input" data-toggle="tooltip" />
        <CommonButtonsToolTip id="input" toolTipText="input" />
        <Input className="btn btn-success w-auto" id="submit" type="submit" defaultValue="Submit" />
        <CommonButtonsToolTip id="submit" toolTipText="submit" />
        <Button color="info" id="buttonSubmit" type="submit" data-toggle="tooltip" data-bs-original-title="btn btn-info">
          {ButtonTittle}
        </Button>
        <CommonButtonsToolTip id="buttonSubmit" toolTipText="buttonSubmit" />
      </CardBody>
    </Card>
  );
};

export default CustomStateButtons;
