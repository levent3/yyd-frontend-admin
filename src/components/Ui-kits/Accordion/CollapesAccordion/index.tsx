import CardHead from "CommonElements/CardHead";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Collapse } from "reactstrap";
import { ButtonwithEvent, CollapesText, Linkwithhref } from "utils/Constant";

const CollapesAccordion = () => {
  const [open, setOpen] = useState(false);
  const submenuObj = [
    {
      text: "you can change state by using",
      code: " onClick",
    },
    {
      text: " event and change toggle show and close and you can use this accordion without any collaps class.",
    },
  ];
  return (
    <Col md={6} sm={12}>
      <Card>
        <CardHead title="Collapse Accordion" subTitle={submenuObj} />
        <CardBody>
          <div className="common-flex">
            <Button color="dark" onClick={() => setOpen(!open)}>
              {Linkwithhref}
            </Button>
            <Button color="dark" type="button" onClick={() => setOpen(!open)}>
              {ButtonwithEvent}
            </Button>
          </div>
          <Collapse
            className={`btn-dark accordion-dark1 ${open && "show"} mt-3`}
          >
            <CardBody className="mb-0 dark-accordion text-white">
              {CollapesText}
            </CardBody>
          </Collapse>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CollapesAccordion;
