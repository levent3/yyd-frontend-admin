import { Fragment } from "react";
import { Button, Card, CardBody } from "reactstrap";
import CommonButtonsToolTip from "./CommonButtonsToolTip";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import { commonButtonsInterFace } from "Types/ButtonsType";

const CommonButtons = ({
  commonButtonsData,
  title,
  subTitle,
  className,
  raised,
}: commonButtonsInterFace) => {
  return (
    <Card>
      <CommonCardHeading smallHeading={title} span={subTitle} />
      <CardBody className="common-flex">
        {commonButtonsData.map((data, index) => (
          <Fragment key={index}>
            <Button
              className={`${className ? className : ""} ${
                raised && `btn-air-${data.color}`
              }`}
              outline={data.outline}
              active={data.active}
              disabled={data.disabled}
              size={data.size ? data.size : ""}
              id={data.id}
              color={data.color}
            >
              {data.tittle}
            </Button>
            <CommonButtonsToolTip toolTipText={data.toolTipText} id={data.id} />
          </Fragment>
        ))}
      </CardBody>
    </Card>
  );
};

export default CommonButtons;
