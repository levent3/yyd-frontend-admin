import { commonIconsSwitchProps } from 'Types/FormsType';
import { CardBody, Label, Media, Input } from 'reactstrap';

const CommonIconsSwitch = ({ switchData,mediaBodyClassName,defaultUnChecked }: commonIconsSwitchProps) => {
  return (
    <CardBody className="common-flex flex-column switch-wrapper">
      {switchData.map((data, index) => (
        <Media key={index}>
          <Media body className={`text-end  ${mediaBodyClassName ?mediaBodyClassName:""}`}>
            <Label className="switch mb-0">
              <Input type="checkbox" defaultChecked={defaultUnChecked? false :true}  />
              <span className={`switch-state bg-${data.color}`} />
            </Label>
          </Media>
          <Label className="col-form-label m-l-10">{data.header}</Label>
        </Media>
      ))}
    </CardBody>
  );
};

export default CommonIconsSwitch;
