//@ts-nocheck
import { useState, ChangeEvent } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, Col, FormGroup, Input, Label, Row, } from "reactstrap";
import FeatherIconCom from "CommonElements/Icons/FeatherIconCom";
import { netBankingFormBankList } from "Data/Forms/Layout";
import ShowError from "../common/ShowError";
import { toast } from "react-toastify";
import { AgreeConditions, Finish, NetBanking, SelectYourBank } from "utils/Constant";

const NetBankingForm = () => {
  const [netBankingFormValues, setNetBankingForm] = useState({ bankName: "", feedBack: "", });
  const { bankName, feedBack } = netBankingFormValues;
  const [open, setOpen] = useState("");
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;
    setNetBankingForm({ ...netBankingFormValues, [name]: value });
  };

  const handleNextButton = () => {
    if (bankName !== "" && feedBack !== "") {
      toast.success("Form successfully submitted");
    } else {
      ShowError();
    }
  };
  const toggle = (id: string) => {
    open === id ? setOpen("") : setOpen(id);
  };
  return (
    <form onSubmit={(event) => event.preventDefault()} className="row g-3 mb-3 needs-validation custom-input" noValidate>
      <Col md={12}>
        <Accordion open={open} toggle={toggle} className="dark-accordion">
          <AccordionItem>
            <AccordionHeader targetId="1" className="accordion-light-primary txt-primary">{NetBanking}
              <FeatherIconCom iconName={open === "1" ? "ChevronUp" : "ChevronDown"} className="svg-color" />
            </AccordionHeader>
            <AccordionBody accordionId="1" className="weight-title card-wrapper">
              <h6 className="sub-title f-14">{SelectYourBank}</h6>
              <Row className="choose-bank">
                {netBankingFormBankList.map((data, index) => (
                  <Col sm={6} key={index}>
                    {data.bankList.map((bankNames, number) => (
                      <FormGroup check key={number} className="radio radio-primary">
                        <Input id={bankNames} type="radio" name="bankName" onChange={getUserData} checked={bankNames === bankName} value={bankNames} />
                        <Label className="form-check-label" htmlFor={bankNames}>{bankNames} {number}</Label>
                      </FormGroup>
                    ))}
                  </Col>
                ))}
              </Row>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </Col>
      <Col xs={12}>
        <Input type="textarea" name="feedBack" value={feedBack} onChange={getUserData} placeholder="Your Feedback" />
      </Col>
      <Col xs={12}>
        <FormGroup className="mb-0 form-check">
          <Input id="invalidCheck67" type="checkbox" required />
          <Label className="form-check-label mb-0" htmlFor="invalidCheck67">{AgreeConditions}</Label>
        </FormGroup>
      </Col>
      <Col xs={12} className="text-end">
        <Button color="success" onClick={handleNextButton}>{Finish}</Button>
      </Col>
    </form>
  );
};

export default NetBankingForm;
