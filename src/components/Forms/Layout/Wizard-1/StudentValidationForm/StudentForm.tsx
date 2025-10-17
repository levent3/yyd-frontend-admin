import { studentFormPropsType } from "Types/FormLayoutType";
import Image from "next/image";
import { Button, Col, Form, Input, InputGroup, Label, Row } from "reactstrap";
import { AddProfile, ConfirmPassword, Congratulations, Email, Github, ImgPath, Name, Next, Password, PortfolioURL, Previous, ProjectDescription, SocialLinks, Submit, Twitter } from "utils/Constant";

const StudentForm = ({ handleImageLabelClick, imageUrl, getUserData, studentValidationForm, level, handleNextButton, fileInputRef, handleBackButton }: studentFormPropsType) => {
  const { password, name, email, confirmPassWord, portfolioURL, projectDescription, twitterUrl, gitHubUrl, } = studentValidationForm;

  return (
    <form onSubmit={(e) => e.preventDefault()} className="form-wizard">
      <div className={`tab ${level === 1 ? "d-block" : "d-none"}`}>
        <Row className="g-3">
          <Col sm={6}>
            <Label>{Name}</Label>
            <Input onChange={getUserData} value={name} name="name" type="text" placeholder="Enter your name" />
          </Col>
          <Col sm={6}>
            <Label>{Email}<span className="txt-danger">*</span></Label>
            <Input name="email" onChange={getUserData} value={email} type="email" placeholder="cuba@gmail.com" />
          </Col>
          <Col xs={12}>
            <Label sm={12}>{Password}<span className="txt-danger">*</span></Label>
            <Input name="password" onChange={getUserData} value={password} type="password" placeholder="Enter password" />
          </Col>
          <Col xs={12}>
            <Label className="col-sm-12">{ConfirmPassword}<span className="txt-danger">*</span></Label>
            <Input name="confirmPassWord" onChange={getUserData} value={confirmPassWord} type="password" placeholder="Enter confirm password" />
          </Col>
        </Row>
      </div>
      <div className={`tab ${level === 2 ? "d-block" : "d-none"}`}>
        <Row className="g-3 avatar-upload">
          <Col xs={12}>
            <div>
              <div className="avatar-edit">
                <Input onChange={getUserData} innerRef={fileInputRef} className="d-none" type="file" accept=".png, .jpg, .jpeg" name="imageUpload" />
                <Label htmlFor="imageUpload" onClick={handleImageLabelClick} />
              </div>
              <div className="avatar-preview">
                <div id="image" style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : `url(${ImgPath}/forms/user.png)`, }} />
              </div>
            </div>
            <h6>{AddProfile}</h6>
          </Col>
          <Col xs={12}>
            <Label>{PortfolioURL}</Label>
            <Input value={portfolioURL} onChange={getUserData} name="portfolioURL" type="url" placeholder="https://cuba" />
          </Col>
          <Col xs={12}>
            <Label>{ProjectDescription}</Label>
            <Input type="textarea" value={projectDescription} onChange={getUserData} name="projectDescription" rows={2} />
          </Col>
        </Row>
      </div>
      <div className={`tab ${level === 3 ? "d-block" : "d-none"}`}>
        <h5 className="mb-2">{SocialLinks}</h5>
        <Row className="g-3">
          <Col sm={6}>
            <Label>{Twitter}</Label>
            <Input name="twitterUrl" onChange={getUserData} value={twitterUrl} type="url" placeholder="https://twitter.com" />
          </Col>
          <Col sm={6}>
            <Label>{Github}</Label>
            <Input name="gitHubUrl" onChange={getUserData} value={gitHubUrl} type="url" placeholder="https:/github.com" />
          </Col>
          <Col xs={12}>
            <InputGroup>
              <Input name="studentFile" onChange={getUserData} type="file" />
              <Button color="secondary" outline>{Submit}</Button>
            </InputGroup>
          </Col>
          <Col xs={12}>
            <Input type="select" onChange={getUserData} name="positions">
              <option value={""}>Positions</option>
              <option value={"Web Designer"}>Web Designer</option>
              <option value={"Software Engineer"}>Software Engineer</option>
              <option value={"UI/UX Designer "}>UI/UX Designer </option>
              <option value={"Web Developer"}>Web Developer</option>
            </Input>
          </Col>
          <Col xs={12}>
            <Label>Why do you want to take this position?</Label>
            <Input type="textarea" name="positionQuestion" onChange={getUserData} id="questionsTextarea" rows={2} defaultValue={""} />
          </Col>
        </Row>
      </div>
      <div className={`tab ${level === 4 ? "d-block" : "d-none"}`}>
          <Row>
            <Col xs="12" className="m-0">
              <div className="successful-form">
                <Image width={100} height={100} className="img-fluid" src={`${ImgPath}/gif/dashboard-8/successful.gif`} alt="successful" />
                <h6>{Congratulations}</h6>
                <p>Well done! You have successfully completed.</p>
              </div>
            </Col>
          </Row>
      </div>
      <div>
        <div className="d-flex justify-content-end align-items-center gap-2 pt-3">
          {level > 1 && (<Button color="secondary" onClick={handleBackButton}>{Previous}</Button>)}
          <Button color="primary" onClick={handleNextButton}>{Next}</Button>
        </div>
      </div>
      <div className="text-center"><span className="step" /><span className="step" /><span className="step" /><span className="step" /></div>
    </form>
  );
};

export default StudentForm;
