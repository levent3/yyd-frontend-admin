import { popularBanksList } from "Data/Forms/Layout";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { AadhaarNumber, ChooseBanks, Continue, ImgPath, PAN, Previous, } from "utils/Constant";
import ShowError from "../common/ShowError";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";
import { businessFormCommonProps } from "Types/FormType";

const BankInfoForm = ({ callbackActive }: businessFormCommonProps) => {
  const [bankDetailsForm, setBankDetailsForm] = useState({ aadhaarNumber: "", panNumber: "", bankName: "", });
  const { aadhaarNumber, panNumber, bankName } = bankDetailsForm;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = name == "rememberNextTime" ? event.target.checked : event.target.value;
    setBankDetailsForm({ ...bankDetailsForm, [name]: value });
  };

  const handleNextButton = () => {
    if (aadhaarNumber !== "" && panNumber !== "" && bankName !== "") {
      callbackActive(3);
    } else {
      ShowError();
    }
  };

  return (
    <form onSubmit={(event) => event.preventDefault()} className="row g-3 needs-validation" noValidate>
      <Col sm={6} className="bank-search">
        <Label>{AadhaarNumber}<span className="txt-danger">*</span></Label>
        <Input value={aadhaarNumber} name="aadhaarNumber" onChange={getUserData} type="search" placeholder="xxxx xxxx xxxx xxxx" />
      </Col>
      <Col sm={6} className="bank-search">
        <Label>{PAN}<span className="txt-danger">*</span></Label>
        <Input type="search" placeholder="xxxxxxxxxx" value={panNumber} name="panNumber" onChange={getUserData} />
      </Col>
      <Col xs={12}>
        <h6>{ChooseBanks}</h6>
        <div className="bank-selection">
          <FormGroup check className="radio radio-primary ps-0">
            <ul className="radio-wrapper">
              {popularBanksList.map((data, index) => (
                <li key={index}>
                  <Input id={data.bankName} type="radio" name="bankName" value={data.bankName} checked={bankName === data.bankName} onChange={getUserData} defaultValue="option2" />
                  <Label className="form-check-label" htmlFor={data.bankName}>
                    <Image width={100} height={50} src={`${ImgPath}/forms/${data.imageName}`} alt="HDFC" />
                    <span>{data.bankName}</span>
                  </Label>
                </li>
              ))}
            </ul>
          </FormGroup>
        </div>
      </Col>
      <Col xs={12} className="d-flex align-items-center justify-content-end gap-2">
        <Button color="primary" onClick={() => callbackActive(1)}>{Previous}</Button>
        <Button color="primary" onClick={handleNextButton}>{Continue}</Button>
      </Col>
    </form>
  );
};

export default BankInfoForm;
