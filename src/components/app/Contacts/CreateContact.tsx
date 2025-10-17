import { Fragment, useState, useContext } from 'react';
import { Users } from "react-feather";
import { Row, Col, Modal, ModalBody, Label, Input, FormGroup, Form, Button, } from "reactstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { NewContacts, AddContacts, Name, Mobile, Save, Cancel, Email, Phone, LastName, Work, Other } from "utils/Constant";
import { ContactContext } from '../../../../helper/Contacts/index';
import { addNewUser } from 'Types/ContactType';

const CreateContact = () => {
  const [modal, setModal] = useState(false);
  const { createUser } = useContext(ContactContext)
  const toggle = () => setModal(!modal);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<addNewUser>();
  const AddContact: SubmitHandler<addNewUser> = (data) => { createUser(data); toggle(); reset() }

  return (
    <Fragment>
      <Button className="badge-light-primary d-block w-100 btn-mail" color="" onClick={toggle}>
        <Users className="me-2" />
        {NewContacts}
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <div className='modal-header'>
          <h5 className='modal-title'>{AddContacts}</h5>
          <Button color="transprant" className="btn-close" onClick={toggle} type="button"></Button>
        </div>
        <ModalBody>
          <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddContact)}>
            <div className="form-row">
              <FormGroup className="col-md-12 form-mb-0">
                <Row>
                  <Col sm="6" className='create-group'>
                    <Label>{Name}</Label>
                    <input className="form-control" type="text" {...register("name", { required: true })} />
                    <span style={{ color: "red" }}>{errors.name && "First name is required"}</span>
                  </Col>
                  <Col sm="6" className='create-group'>
                    <Label>{LastName}</Label>
                    <input className="form-control" type="text" {...register("surname", { required: true })} />
                    <span style={{ color: "red" }}>{errors.surname && "Last name is required"}</span>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup className="col-md-12 form-mb-0 create-group">
                <Label>{Email}</Label>
                <input className="form-control" type="text" {...register("email", { required: true })} />
                <span style={{ color: "red" }}>
                  {errors.email && "Please enter email."}
                </span>
              </FormGroup>
              <FormGroup className="col-md-12 form-mb-0">
                <Row>
                  <Col sm="6" className='create-group'>
                    <Label>{Phone}</Label>
                    <input className="form-control" type="number" {...register("mobile", { required: true })} />
                    <span style={{ color: "red" }}>
                      {errors.mobile && "Please enter number max 9 digit"}
                    </span>
                  </Col>
                  <Col sm="6" className='create-group'>
                    <Label>{Mobile}</Label>
                    <Input type="select" className="form-control">
                      <option value="1">{Mobile}</option>
                      <option value="2">{Work}</option>
                      <option value="3">{Other}</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>
            </div>
            <Button color="secondary" className="me-1" type="submit">{Save}</Button>&nbsp;
            <Button color="primary" onClick={toggle}>{Cancel}</Button>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default CreateContact;