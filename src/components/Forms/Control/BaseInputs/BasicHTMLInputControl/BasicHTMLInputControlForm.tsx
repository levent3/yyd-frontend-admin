import CommonCardFooter from "CommonElements/Footer/CommonCardFooter";
import {CardBody,Col, Form,FormGroup,Row,Label,Input } from "reactstrap"
import {ColorPickerHeading,DataListExampleHeading,DateAndTimeHeading,DateHeading,MaximumLengthHeading,MonthHeading,NumberHeading,PasswordHeading,PlaceHolderHeading,StaticTextContent,StaticTextHeading,TelephoneHeading,TimeHeading,URLHeading,WeekHeading,countryList,} from "utils/Constant";
const BasicHTMLInputControlForm = () => {
  return (
    <Form onSubmit={(event) => event.preventDefault()} className="theme-form">
          <CardBody className="custom-input">
            <Row>
              <Col>
                <FormGroup className="row">
                  <Label className="col-sm-3">{PlaceHolderHeading}</Label>
                  <Col sm={9}><Input type="text" placeholder="Type your title in Placeholder"/></Col>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3">{PasswordHeading}</Label>
                  <Col sm={9} className="col-sm-9"><Input type="password" placeholder="Password input" /></Col>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3">{NumberHeading}</Label>
                  <Col sm={9}><Input type="number" placeholder="Number" /></Col>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3">{TelephoneHeading}</Label>
                  <Col sm={9}>
                    <Input className="m-input digits" type="tel" defaultValue="91-(999)-999-999"/>
                  </Col>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3">{URLHeading}</Label>
                  <Col sm={9}><Input type="url" defaultValue="https://getbootstrap.com" /></Col>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3">{DateAndTimeHeading}</Label>
                  <Col sm={9}><Input type="datetime-local" defaultValue="2018-01-19T18:45:00"/></Col>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3">{DateHeading}</Label>
                  <Col sm={9}><Input className="digits" type="date" defaultValue="2018-01-01"/></Col>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3">{MonthHeading}</Label>
                  <Col sm={9}><Input type="month" defaultValue="2018-01" /></Col>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3">{WeekHeading}</Label>
                  <Col sm={9} className="col-sm-9"><Input type="week" defaultValue="2018-W09" /></Col>
                </FormGroup>
                <FormGroup className="row">
                  <Col sm={3}>
                    <Label>{DataListExampleHeading}</Label>
                  </Col>
                  <Col sm={9}>
                    <Input list="datalistOptions" placeholder="Look up your nation..."/>
                    <datalist id="datalistOptions">
                      {countryList.map((data, index) => (<option key={index} value={data} />))}
                    </datalist>
                  </Col>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3">{TimeHeading}</Label>
                  <Col sm={9}><Input className="digits" type="time" defaultValue="21:45:00"/></Col>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3 pt-0">{ColorPickerHeading}</Label>
                  <Col sm={2}><Input className="form-control-color" type="color" defaultValue="#563d7c"/></Col>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3">{MaximumLengthHeading}</Label>
                  <Col sm={9}><Input type="text" placeholder="Content must be in 6 characters" maxLength={6}/></Col>
                </FormGroup>
                <Row>
                  <Label className="col-sm-3">{StaticTextHeading}</Label>
                  <Col sm={9}><div className="form-control-static">{StaticTextContent}</div></Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
          <CommonCardFooter />
        </Form>
  )
}

export default BasicHTMLInputControlForm