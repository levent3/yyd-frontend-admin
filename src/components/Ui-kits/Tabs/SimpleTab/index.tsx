import CardHead from "CommonElements/CardHead";
import React, { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import SimpleTabContent from "./SimpleTabContet";
import SimpleNav from "./SimpleNav";

const SimpleTab = () => {
  const [basicTab, setBasicTab] = useState<string>("1");
  const submenuObj = [
    {
      text: "Use the ",
      code: ".nav-link",
    },
    {
      text: " with ",
      code: ".show ",
    },
    {
      text: "class to jump particular tabs.",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CardHead title="Simple Tabs" subTitle={submenuObj} />
        <CardBody>
          <SimpleNav basicTab={basicTab} setBasicTab={setBasicTab} />
          <SimpleTabContent tabId={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleTab;
