import { ChangeEvent, useState } from "react";
import ShowError from "../common/ShowError";
import { Button, Col, Input, Label } from "reactstrap";
import { businessFormCommonProps } from "Types/FormType";
import { AccountName, Continue, Email, Previous, SelectTeamWith, TeamDetails, projectDescription, projects } from "utils/Constant";
import VariationBox from "./VariationBox";

const BusinessSettingsForm = ({ callbackActive }: businessFormCommonProps) => {
  const [businessSettingsFormValues, setBusinessSettingsFormValues] = useState({ accountName: "", email: "", description: "", });
  const { accountName, email, description } = businessSettingsFormValues;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;
    setBusinessSettingsFormValues({ ...businessSettingsFormValues, [name]: value });
  };
  const handleNextButton = () => {
    if (accountName !== "" && email !== "" && description !== "") {
      callbackActive(3);
    } else {
      ShowError();
    }
  };

  return (
    <form onSubmit={(event) => event.preventDefault()} className="row g-3 needs-validation" noValidate>
      <Col md={6}>
        <Label>{AccountName}<span className="txt-danger">*</span></Label>
        <Input name="accountName" value={accountName} onChange={getUserData} type="text" />
      </Col>
      <Col md={6}>
        <Label>{Email}<span className="txt-danger">*</span></Label>
        <Input type="text" placeholder="org@superrito.com" name="email" value={email} onChange={getUserData} />
      </Col>
      <Col xs={12}>
        <Label>{projectDescription}</Label>
        <Input type="textarea" rows={3} name="description" value={description} onChange={getUserData} />
      </Col>
      <Col xs={12}>
        <section className="main-upgrade">
          <div>
            <i className="fa fa-rocket" />
            <h5 className="mb-2">{SelectTeamWith}<span className="txt-primary">{projects}</span></h5>
            <p className="text-muted mb-2">{TeamDetails}</p>
          </div>
          <VariationBox />
        </section>
      </Col>
      <Col xs={12} className="d-flex justify-content-end align-items-center gap-2">
        <Button onClick={() => callbackActive(1)} color="primary">{Previous}</Button>
        <Button color="primary" onClick={handleNextButton}>{Continue}</Button>
      </Col>
    </form>
  );
};

export default BusinessSettingsForm;
