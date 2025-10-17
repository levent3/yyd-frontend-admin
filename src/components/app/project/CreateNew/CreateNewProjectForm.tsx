import { useForm } from "react-hook-form";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { Add, Big, Cancel, ClientName, Comment, Doing, Done, EnterSomeDetails, Issues, Medium, ProgressLevel, ProjectRate, ProjectStatus, ProjectTitle, Resolved, Small, UploadProjectFile } from "utils/Constant";
import Dropzone from "react-dropzone-uploader";
import Link from "next/link";
import { useContext } from "react";
import ProjectContext from "helper/project";

const CreateNewProjectForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setProjectData } = useContext(ProjectContext);

  const addProject = (data: any) => {
    var randomValue = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    const tempObject = {
      issue: randomValue.toString(),
      resolved: randomValue.toString(),
      comment: randomValue.toString(),
      like: randomValue.toString(),
      progress: randomValue.toString(),
      title: data.title,
      badge: data.badge,
      img: "user/3.jpg",
      sites: "Themeforest, australia",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      customers_img1: "user/3.jpg",
      customers_img2: "user/5.jpg",
      customers_img3: "user/1.jpg",
    };
    if (data !== "") {
      setProjectData((prevArray) => [...prevArray, tempObject]);
    }
  };

  return (
    <Form className="theme-form create-project-detail" onSubmit={handleSubmit(addProject)}>
      <Row>
        <Col>
          <FormGroup class="create-group">
            <Label>{ProjectTitle}</Label>
            <input className="form-control" type="text" placeholder="Project name *" {...register("title", { required: true })} />
            <span style={{ color: "red" }}>{errors.title && "Title is required"}</span>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup class="create-group">
            <Label>{ClientName}</Label>
            <input className="form-control" type="text" placeholder="Name client or company name" {...register("client_name", { required: true })} />
            <span style={{ color: "red" }}>{errors.client_name && "Client Name is required"}</span>
          </FormGroup>
        </Col>
      </Row>
      <Row className="g-md-3 g-2">
        <Col sm={4}>
          <FormGroup class="create-group">
            <Label>{ProjectRate}</Label>
            <input className="form-control" type="number" defaultValue="10" placeholder="Enter project Rate" {...register("rate", { required: true })} />
          </FormGroup>
        </Col>
        <Col sm={4}>
          <FormGroup class="create-group">
            <Label>{ProgressLevel}</Label>
            <select className="form-control digits" required {...register("progress_level", { required: true })}>
              <option value="25">{"25"}</option>
              <option value="50">{"50"}</option>
              <option value="70">{"70"}</option>
              <option value="100">{"100"}</option>
            </select>
          </FormGroup>
        </Col>
        <Col sm={4}>
          <FormGroup class="create-group">
            <Label>{ProjectStatus}</Label>
            <select placeholder="Select Status" className="form-control digits" required {...register("badge", { required: true })}>
              <option value="Done">{Done}</option>
              <option value="Doing">{Doing}</option>
            </select>
          </FormGroup>
        </Col>
      </Row>
      <Row className="g-md-3 g-2">
        <Col sm={4}>
          <FormGroup class="create-group">
            <Label>{Issues}</Label>
            <select placeholder="Select Issues" className="form-control digits" required {...register("issues", { required: true })}>
              <option>{Small}</option>
              <option>{Medium}</option>
              <option>{Big}</option>
            </select>
          </FormGroup>
        </Col>
        <Col sm={4}>
          <FormGroup class="create-group">
            <Label>{Resolved}</Label>
            <input className="form-control" type="text" placeholder="Add Resolved issues" {...register("resolved", { required: true })} />
          </FormGroup>
        </Col>
        <Col sm="4">
          <FormGroup class="create-group">
            <Label>{Comment}</Label>
            <input className="form-control" type="text" placeholder="Add Comment" {...register("comment", { required: true })} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup class="create-group">
            <Label>{EnterSomeDetails}</Label>
            <textarea className="form-control" rows={3} {...register("description", { required: true })} />
            <span style={{ color: "red" }}>{errors.description && "Some Details is required"}</span>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup class="create-group">
            <Label>{UploadProjectFile}</Label>
            <Dropzone maxFiles={1} multiple={false} canCancel={false} inputContent="Drop A File" styles={{ dropzone: { width: "100%", height: 150 }, dropzoneActive: { borderColor: "green" } }} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="text-end mt-3">
            <Button type="submit" color="success" className="me-3">{Add}</Button>
            <Link href={`/app/project/project-list`}><Button color="danger">{Cancel}</Button></Link>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateNewProjectForm;
