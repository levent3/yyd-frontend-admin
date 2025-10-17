import CardHead from "CommonElements/CardHead";
import { ListCheckboxData } from "Data/Ui-kits/ListData";
import React from "react";
import { Card, CardBody, Col, Input } from "reactstrap";

const ListWithCheckbox = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".form-check-input ",
    },
    {
      text: "to check your checkbox.",
    },
  ];
  return (
    <Col xl={4} md={6}>
      <Card>
        <CardHead title="Lists with checkbox" subTitle={submenuObj} />
        <CardBody className="dark-list">
          <ul className="list-group">
            {ListCheckboxData &&
              ListCheckboxData.map((item, index) => (
                <li className="list-group-item" key={index}>
                  <Input
                    className={`form-check-input me-1 ${item.class}`}
                    id={`${item.idFor}`}
                    type="checkbox"
                  />
                  <label
                    className={`form-check-label mb-0 ${item.labelClass}`}
                    htmlFor={`${item.idFor}`}
                  >
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

export default ListWithCheckbox;
