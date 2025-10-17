import { CardHeader, Col, CardBody, Row, FormGroup, Label, Input, CardFooter, Button } from 'reactstrap';
import { AboutMe, Address, Aus, Canada, City, Company, Country, EditProfile, EmailAddress, FirstName, Germany, LastName, PostalCode, Select, UpdateProfile, Usa, Username } from "utils/Constant"

const EditProfileForm = () => {
  return (
    <Col xl={8} >
      <form className="card">
        <CardHeader><h4 className="card-title mb-0">{EditProfile}</h4></CardHeader>
        <CardBody>
          <Row>
            <Col md={5}>
              <FormGroup>
                <Label >{Company}</Label>
                <Input type="text" placeholder="Company" />
              </FormGroup>
            </Col>
            <Col sm={6} md={3} >
              <FormGroup>
                <Label>{Username}</Label>
                <Input type="text" placeholder="Username" />
              </FormGroup>
            </Col>
            <Col sm={6} md={4} >
              <FormGroup>
                <Label >{EmailAddress}</Label>
                <Input type="email" placeholder="Email" />
              </FormGroup>
            </Col>
            <Col sm={6} md={6} >
              <FormGroup>
                <Label >{FirstName}</Label>
                <Input type="text" placeholder="Company" />
              </FormGroup>
            </Col>
            <Col sm={6} md={6} >
              <FormGroup>
                <Label >{LastName}</Label>
                <Input type="text" placeholder="Last Name" />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label >{Address}</Label>
                <Input type="text" placeholder="Home Address" />
              </FormGroup>
            </Col>
            <Col sm={6} md={4} >
              <FormGroup>
                <Label >{City}</Label>
                <Input type="text" placeholder="City" />
              </FormGroup>
            </Col>
            <Col sm={6} md={3} >
              <FormGroup>
                <Label >{PostalCode}</Label>
                <Input type="number" placeholder="ZIP Code" />
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label>{Country}</Label>
                <select className="form-control btn-square form-select">
                  <option value={0}>{Select}</option>
                  <option value={1}>{Germany}</option>
                  <option value={2}>{Canada}</option>
                  <option value={3}>{Usa}</option>
                  <option value={4}>{Aus}</option>
                </select>
              </FormGroup>
            </Col>
            <Col md={12}>
              <Label >{AboutMe}</Label>
              <textarea className="form-control" rows={3} placeholder="Enter About your description" />
            </Col>
          </Row>
        </CardBody>
        <CardFooter className="text-end"><Button color="primary" type="submit">{UpdateProfile}</Button></CardFooter>
      </form>
    </Col>

  )
}

export default EditProfileForm