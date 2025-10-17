import { ChangeEvent, useState } from "react";
import { AccountType, Continue, SearchYour, SelectAccountDescription, informationCheck } from "utils/Constant";
import ShowError from "../common/ShowError";
import { selectAccountBankFormData } from "Data/Forms/Layout";
import { businessFormCommonProps } from "Types/FormType";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";

const SelectAccount = ({ callbackActive }: businessFormCommonProps) => {
  const [accountType, setAccountType] = useState("");
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setAccountType(value);
  };
  const handleNextButton = () => {
    if (accountType !== "") {
      callbackActive(2);
    } else {
      ShowError();
    }
  };

  return (
    <form className="row g-3 needs-validation" noValidate onSubmit={(event) => event.preventDefault()}>
      <Col xs={12} >
        <h5>{AccountType}</h5>
        <p>{SelectAccountDescription}</p>
      </Col>
      <Col xs={12}>
        <FormGroup check className="radio radio-primary ps-0 select-account">
          <ul className="radio-wrapper">
            {selectAccountBankFormData.map((data, index) => (
              <li key={index}>
                <Input id={data.tittle} value={data.tittle} checked={data.tittle === accountType} type="radio" name="accountType" onChange={getUserData}/>
                <Label className="form-check-label mb-0" htmlFor={data.tittle}>
                  <i className={`fa ${data.iconName}`} />
                  <span className="d-flex flex-column">
                    <span>{data.tittle}</span>
                    <span>{SearchYour}{data.tittle}{informationCheck}</span>
                  </span>
                </Label>
              </li>
            ))}
          </ul>
        </FormGroup>
      </Col>
      <Col xs={12} className="text-end">
        <Button onClick={handleNextButton} color="primary">{Continue}</Button>
      </Col>
    </form>
  );
};

export default SelectAccount;
