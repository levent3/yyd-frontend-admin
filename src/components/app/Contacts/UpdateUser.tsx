import {
  userUpdateType,
  userCallbackUser,
  updateUserPropsType,
} from "Types/ContactType";
import { useForm, SubmitHandler } from "react-hook-form";
import { Row, Col, Label, FormGroup, Form, Input, Button } from "reactstrap";
import {
  Name,
  Save,
  Cancel,
  Email,
  Phone,
  Mobile,
  Work,
  Other,
  SirName,
} from "utils/Constant";
import { useContext } from "react";
import { ContactContext } from "../../../../helper/Contacts/index";

const UpdateUser = ({ editData, userEditCallback }: updateUserPropsType) => {
  const { handleUpdateUser } = useContext(ContactContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userUpdateType>();
  const UpdateContact: SubmitHandler<userUpdateType> = (data) => {
    let dataWithImage = { ...data, avatar: editData.avatar };
    handleUpdateUser(data, editData.id);
    userEditCallback(false, dataWithImage);
  };

  return (
    <div className="contact-editform ps-0 m-auto">
      <Form onSubmit={handleSubmit(UpdateContact)}>
        <Row>
          <FormGroup className="col-md-12">
            <Row>
              <Col sm={6}>
                <Label>{Name}</Label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={editData?.name}
                  {...register("name", { required: true })}
                />
                <span style={{ color: "red" }}>
                  {errors.name && "First name is required"}
                </span>
              </Col>
              <Col sm={6}>
                <Label>{SirName}</Label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={editData.surname}
                  {...register("surname", { required: true })}
                />
                <span style={{ color: "red" }}>
                  {errors.surname && "Last name is required"}
                </span>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup className="col-md-12">
            <Label>{Email}</Label>
            <input
              className="form-control"
              type="email"
              defaultValue={`${editData.name}@gmail.com`}
              {...register("email", { required: true })}
            />
            <span style={{ color: "red" }}>
              {errors.email && "Please enter email "}
            </span>
          </FormGroup>
          <FormGroup className="col-md-12 my-0">
            <Row>
              <Col sm={6}>
                <Label htmlFor="con-phone">{Phone}</Label>
                <input
                  className="form-control"
                  type="number"
                  defaultValue={editData.mobile}
                  {...register("mobile", { required: true })}
                />
                <span style={{ color: "red" }}>
                  {errors.mobile && "Please enter Mobile no."}
                </span>
              </Col>
              <Col sm={6}>
                <Label htmlFor="con-phone">{Mobile}</Label>
                <Input type="select" className="form-control">
                  <option value="1">{Mobile}</option>
                  <option value="2">{Work}</option>
                  <option value="3">{Other}</option>
                </Input>
              </Col>
            </Row>
          </FormGroup>
        </Row>
        <Button color="secondary" className="update-contact me-1">
          {Save}
        </Button>
        &nbsp;&nbsp;
        <Button
          color="primary"
          onClick={() => userEditCallback(false, editData)}
        >
          {Cancel}
        </Button>
      </Form>
    </div>
  );
};

export default UpdateUser;
