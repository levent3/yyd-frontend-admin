import CardHead from "CommonElements/CardHead";
import React from "react";
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import LargePage from "./LargePage";
import { SizingDataList } from "Data/Bonus-Ui/PaginationData";
import { Href } from "utils/Constant";

const PaginationSize = () => {
  const subMenu = [
    {
      text: "Use ",
      code: "[pagination-lg/pagination-md/pagination-lg]",
    },
    {
      text: " for additional sizes.",
    },
  ];
  return (
    <Col xxl={6}>
      <Card>
        <CardHead title="Pagination Sizing" subTitle={subMenu} />
        <CardBody>
          <LargePage />
          {SizingDataList.map(({ className, size }, index) => (
            <Pagination size={size} className={`pagination-info pagin-border-info d-flex ${className}`} aria-label="Page navigation example" key={index}>
              <PaginationItem>
                <PaginationLink href={Href} previous>{`Previous`}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={Href}>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={Href}>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={Href}>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={Href} next>{`Next`}</PaginationLink>
              </PaginationItem>
            </Pagination>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationSize;
