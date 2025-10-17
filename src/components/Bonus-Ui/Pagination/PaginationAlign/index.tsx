import CardHead from "CommonElements/CardHead";
import React from "react";
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import DefaultPagination from "./DefaultPagination";
import { AlignmentDataList } from "Data/Bonus-Ui/PaginationData";
import { Href } from "utils/Constant";

const PaginationAlign = () => {
  const subMenu = [
    {
      text: "Change the alignment of pagination components with flexbox utilities. For example, with ",
      code: ".justify-content-center:",
    },
    {
      text: ".",
    },
  ];
  return (
    <Col xxl={6}>
      <Card>
        <CardHead title="Pagination Alignment" subTitle={subMenu} />
        <CardBody>
          <DefaultPagination />
          {AlignmentDataList.map(({ className, active, color, smallText }, index) => (
            <Pagination className={`pagination ${className} pagin-border-${color} pagination-${color}`} aria-label="Page navigation example" key={index}>
              <PaginationItem>
                <PaginationLink href={Href} previous>{`Previous`}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={Href}>{smallText ? "I" : "i"}</PaginationLink>
              </PaginationItem>
              <PaginationItem active={active}>
                <PaginationLink href={Href}>{smallText ? "II" : "ii"}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={Href}>{smallText ? "III" : "iii"}</PaginationLink>
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

export default PaginationAlign;
