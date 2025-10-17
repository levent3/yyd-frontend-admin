import CardHead from "CommonElements/CardHead";
import { fileInputHeaderData } from "Data/Forms/Control";
import { Col, Card, CardBody, Label, FormGroup, Input } from "reactstrap";
import {DefaultExample,FileInputHeading,MultipleExample,DisabledExample,LargeFileInputExample,SmallFileInputExample,} from "utils/Constant";

const FileInput = () => {
  return (
    <Col md={6}>
      <Card>
        <CardHead title={FileInputHeading} subTitle={fileInputHeaderData} />
        <CardBody>
          <FormGroup>
            <Label>{DefaultExample}</Label>
            <Input type="file" />
          </FormGroup>
          <FormGroup>
            <Label>{MultipleExample}</Label>
            <Input type="file" multiple />
          </FormGroup>
          <FormGroup>
            <Label>{DisabledExample}</Label>
            <Input type="file" disabled />
          </FormGroup>
          <FormGroup>
            <Label>{SmallFileInputExample}</Label>
            <Input className="form-control-sm" type="file" />
          </FormGroup>
          <div>
            <Label>{LargeFileInputExample}</Label>
            <Input className="form-control-lg" type="file" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FileInput;
