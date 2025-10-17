import { useState } from "react";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";
import {
  AgreeConditions,
  AgreeFeedback,
  ChooseFile,
  City,
  CityError,
  Cuba,
  Description,
  FavoritePixelStrapTheme,
  FirstName,
  India,
  InvalidFormFileSelected,
  InvalidMessageError,
  InvalidSelectFeedBack,
  MaterCard,
  NameError,
  Newyork,
  Password,
  PasswordError,
  SelectYourPaymentMethod,
  State,
  StateError,
  SubmitForm,
  Thailand,
  Tivo,
  UK,
  ValidFeedBack,
  Visa,
  Wingo,
  Zip,
  ZipError,
} from "../../../../../../utils/Constant/index";

const ValidationsForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`row g-3 needs-validation custom-input ${
        formSubmit ? "was-validated" : ""
      }`}
      noValidate
    >
      <Col xs={12}>
        <Label>{FirstName}</Label>
        <Input type="text" placeholder="Mark" required />
        <div className="invalid-feedback">{NameError} </div>
        <div className="valid-feedback">{ValidFeedBack}</div>
      </Col>
      <Col xs={12}>
        <label className="col-sm-12 col-form-label">{Password}</label>
        <Input className="form-control" type="password" required />
        <div className="invalid-feedback">{PasswordError}</div>
      </Col>
      <Col xs={12}>
        <Label>{State}</Label>
        <select className="form-select" required>
          <option selected disabled>
            Choose...
          </option>
          <option>{UK}</option>
          <option>{India}</option>
          <option>{Thailand}</option>
          <option>{Newyork}</option>
        </select>
        <div className="invalid-feedback">{StateError}</div>
        <div className="valid-feedback">{ValidFeedBack}</div>
      </Col>
      <Col md={6}>
        <Label>{City}</Label>
        <Input type="text" required />
        <div className="invalid-feedback">{CityError}</div>
        <div className="valid-feedback">{ValidFeedBack}</div>
      </Col>
      <Col md={6}>
        <Label>{Zip}</Label>
        <Input type="number" required />
        <div className="invalid-feedback">{ZipError}</div>
        <div className="valid-feedback">{ValidFeedBack}</div>
      </Col>
      <Col xs={12}>
        <div className="card-wrapper border rounded-3 checkbox-checked">
          <h6 className="sub-title">{SelectYourPaymentMethod}</h6>
          <div className="radio-form">
            <FormGroup check>
              <Input
                id="validationFormCheck25"
                type="radio"
                name="radio-stacked"
                required
              />
              <label
                className="form-check-label"
                htmlFor="validationFormCheck25"
              >
                {MaterCard}
              </label>
            </FormGroup>
            <FormGroup check>
              <Input
                id="validationFormCheck23"
                type="radio"
                name="radio-stacked"
                required
              />
              <label
                className="form-check-label"
                htmlFor="validationFormCheck23"
              >
                {Visa}
              </label>
            </FormGroup>
          </div>
        </div>
      </Col>
      <Col xs={12}>
        <select className="form-select" required aria-label="select example">
          <option>{FavoritePixelStrapTheme}</option>
          <option value={1}>{Cuba}</option>
          <option value={2}>{Tivo}</option>
          <option value={3}>{Wingo}</option>
        </select>
        <div className="invalid-feedback">{InvalidSelectFeedBack}</div>
      </Col>
      <Col xs={12}>
        <Label>{ChooseFile}</Label>
        <Input type="file" aria-label="file example" required />
        <div className="invalid-feedback">{InvalidFormFileSelected}</div>
      </Col>
      <Col xs={12}>
        <Label>{Description}</Label>
        <Input
          type="textarea"
          placeholder="Enter your comment"
          required
          defaultValue={""}
        />
        <div className="invalid-feedback">{InvalidMessageError}</div>
      </Col>
      <Col xs={12}>
        <FormGroup check>
          <Input type="checkbox" required />
          <label className="form-check-label">{AgreeConditions}</label>
          <div className="invalid-feedback">{AgreeFeedback}</div>
        </FormGroup>
      </Col>
      <Col xs={12}>
        <Button
          color="primary"
          onClick={() => setFormSubmit(true)}
          type="submit"
        >
          {SubmitForm}
        </Button>
      </Col>
    </form>
  );
};

export default ValidationsForm;
