import { commonSwitchSizeData } from "Data/Forms/Widget";
import { commonSwitchSizePropsType } from "Types/FormsType";
import { CardBody, Input, Label, Media } from "reactstrap";

const CommonSwitchSize = ({ icons }: commonSwitchSizePropsType) => {
  return (
    <CardBody className="common-flex switch-wrapper switch-sizing">
      {commonSwitchSizeData.map((data, index) => (
        <Media key={index}>
          <Label className="col-form-label m-r-10">{data.tittle}</Label>
          <Media
            body
            className={`text-end ${icons ? "icon-state" : ""}  ${
              data.mediaBodyClassName ? data.mediaBodyClassName : ""
            } `}
          >
            <Label className="switch">
              <Input
                className="form-check-input"
                type="checkbox"
                defaultChecked={data.defaultChecked ? true : false}
                disabled={data.disabled ? true : false}
              />
              <span
                className={`switch-state ${
                  data.buttonClass ? data.buttonClass : ""
                }`}
              />
            </Label>
          </Media>
        </Media>
      ))}
    </CardBody>
  );
};

export default CommonSwitchSize;
