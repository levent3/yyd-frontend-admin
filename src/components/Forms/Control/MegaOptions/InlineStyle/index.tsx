import CardHead from "CommonElements/CardHead";
import { inlineStyleHeaderData } from "Data/Forms/Control";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { InlineStyleHeading } from "utils/Constant";
import InlineStyleForm from "./InlineStyleForm";
import CommonCardFooter from "@/components/Forms/common/CommonCardFooter";

const InlineStyle = () => {
  return (
    <Col sm={12}>
      <Card>
        <CardHead title={InlineStyleHeading} subTitle={inlineStyleHeaderData} />
        <CardBody className="megaoptions-border-space-sm">
          <InlineStyleForm />
        </CardBody>
        <CommonCardFooter cardFooterClassName="text-end" cancelButtonClassName="list-light-warning" />
      </Card>
    </Col>
  );
};

export default InlineStyle;
