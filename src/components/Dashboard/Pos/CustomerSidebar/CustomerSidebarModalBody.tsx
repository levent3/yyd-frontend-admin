import { Button, ModalBody, Col, FormGroup, Input, Label } from "reactstrap";
import { CreatePlus, Email, FirstName, LastName, MobileNumber } from "../../../../../utils/Constant/index";
import { customerSidebarModalProps } from "Types/DashboardType";

const CustomerSidebarModalBody = ({toggle}:customerSidebarModalProps) => {
  return (
    <ModalBody>
      <form className="row g-3 needs-validation" noValidate>
        <Col md={6}>
          <Label>{FirstName}<span className="txt-danger">*</span></Label>
          <Input type="text" placeholder="Enter your first-name" required />
        </Col>
        <Col md={6}>
          <Label>{LastName}<span className="txt-danger">*</span></Label>
          <Input type="text" placeholder="Enter your last-name" required />
        </Col>
        <Col md={6}>
          <Label>{MobileNumber}<span className="txt-danger">*</span></Label>
          <Input type="number" placeholder="Mobile number" required />
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>{Email}<span className="txt-danger">*</span></Label>
            <Input type="email" placeholder="customername@gmail.com" />
          </FormGroup>
        </Col>
        <Col md={12} className="d-flex justify-content-end">
          <Button color="primary" onClick={toggle}>{CreatePlus}</Button>
        </Col>
      </form>
    </ModalBody>
  );
};

export default CustomerSidebarModalBody;
