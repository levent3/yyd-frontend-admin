import CardHead from "CommonElements/CardHead";
import { ListRadioData } from "Data/Ui-kits/ListData";
import React from "react";
import { Card, CardBody, Col, Input } from "reactstrap";

const RadioList = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".form-check-input ",
    },
    {
      text: "to check your radio buttons.",
    },
  ];
  return (
    <Col xl={4} md={6}>
      <Card>
        <CardHead title="Lists with radios" subTitle={submenuObj} />
        <CardBody>
          <ul className="list-group">
            {ListRadioData &&
              ListRadioData.map((item, index) => (
                <li className="list-group-item" key={index}>
                  <Input
                    className={`form-check-input me-2 ${item.class}`}
                    id={`firstRadio${index}`}
                    type="radio"
                    name="listGroupRadio"
                  />
                  <label
                    className="form-check-label mb-0"
                    htmlFor={`firstRadio${index}`}
                  >
                    {" "}
                    {item.text}
                  </label>
                </li>
              ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadioList;
