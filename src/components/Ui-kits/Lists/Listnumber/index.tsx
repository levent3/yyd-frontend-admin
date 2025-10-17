import CardHead from "CommonElements/CardHead";
import { NumberListData } from "Data/Ui-kits/ListData";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const ListNumber = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".list-group-numbered",
    },
    {
      text: " to ordered wise print numbers.",
    },
  ];
  return (
    <Col xl={4} xs={12}>
      <Card>
        <CardHead title="Lists with numbers" subTitle={submenuObj} />
        <CardBody>
          <ol className="list-group list-group-numbered">
            {NumberListData &&
              NumberListData.map((item, index) => (
                <li
                  className={`list-group-item fw-bold ${item.class}`}
                  key={index}
                >
                  {item.text}
                </li>
              ))}
          </ol>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListNumber;
