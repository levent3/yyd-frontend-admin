import { useState } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import DatePicker from "react-datepicker";
import { Typeahead } from "react-bootstrap-typeahead";
import { CollegeName, DegreeLevel, Period, Specialization, TypeHeadOptions } from "utils/Constant";

const EducationClass = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleChange = (date: Date) => {
    setStartDate(date);
  };
  const handleChange1 = (date: Date) => {
    setEndDate(date);
  };
  return (
    <Form className="form theme-form">
      <Row>
        <Col xl={6} className="xl-100">
          <FormGroup>
            <Label>{CollegeName}:<span className="font-danger">*</span></Label>
            <Input type="text" placeholder="Enter college name" />
          </FormGroup>
        </Col>
        <Col xl={6} className="xl-100">
          <Label className="col-form-label text-end pt-0">
            {Period}:<span className="font-danger">*</span>
          </Label>
          <Row>
            <Col sm={6}>
              <FormGroup>
                <DatePicker className="form-control digits" selected={startDate} onChange={handleChange}/>
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <DatePicker className="form-control digits" selected={endDate} onChange={handleChange1}/>
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <div className="col-form-label pt-0">
            {DegreeLevel}:<span className="font-danger">*</span>
          </div>
          <FormGroup>
            <Typeahead id="Degree" labelKey="name" multiple={false} options={TypeHeadOptions} placeholder="Degree"/>
          </FormGroup>
        </Col>
        <Col lg={6}>
          <FormGroup>
            <Label>{Specialization}:<span className="font-danger">*</span></Label>
            <Input type="text" placeholder="Enter specialization"/>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default EducationClass;
