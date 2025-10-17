import { JobTitleCheckBoxData } from "Data/jobs";
import { CardBody, Input, Label } from "reactstrap";

const JobTitleCheckBox = () => {
  return (
    <CardBody className="animate-chk">
      {JobTitleCheckBoxData.map((data, index) => (
        <Label className="d-block" for={`check-${index}`} key={index}>
          <Input className="checkbox_animated" id={`check-${index}`} type="checkbox" />
          {data.JobTitle}({data.JobNumber})
        </Label>
      ))}
    </CardBody>
  );
};

export default JobTitleCheckBox;
