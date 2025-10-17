import CommonCardHeading from "CommonElements/CommonCardHeading";
import Image from "next/image";
import { Card, Col, CardBody, Row, Label, Input, FormGroup, Button, } from "reactstrap";
import { AboutMe, Designer, EmailAddress, ImgPath, MarkJecno, MyProfile, Password, Save, Website, } from "utils/Constant";

const EditMyProfile = () => {
  return (
    <Col xl={4}>
      <Card>
        <CommonCardHeading Heading={MyProfile} bigHeadingClassName="card-title mb-0" />
        <CardBody>
          <form onSubmit={(event) => event.preventDefault()}>
            <Row className="mb-2">
              <div className="col-auto">
                <Image width={70} height={70} className="img-70 rounded-circle" alt="edit-user" src={`${ImgPath}/user/7.jpg`} />
              </div>
              <Col> <h5 className="mb-1">{MarkJecno}</h5> <p className="mb-4">{Designer}</p></Col>
            </Row>
            <FormGroup>
              <h6 className="form-label">{AboutMe}</h6>
              <textarea rows={5} className="form-control" defaultValue={"On the other hand, we denounce with righteous indignation"} />
            </FormGroup>
            <FormGroup>
              <Label>{EmailAddress}</Label>
              <Input placeholder="your-email@domain.com" />
            </FormGroup>
            <FormGroup>
              <Label>{Password}</Label>
              <Input type="password" defaultValue="password" />
            </FormGroup>
            <FormGroup>
              <Label>{Website}</Label>
              <Input placeholder="http://Uplor.com" />
            </FormGroup>
            <div className="form-footer">
              <Button color="primary" className="d-block w-100">{Save}</Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EditMyProfile;
