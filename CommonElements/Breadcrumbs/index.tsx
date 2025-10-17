import React from "react";
import { Col, Container, Row } from "reactstrap";
import Link from "next/link";
import SvgIcon from "CommonElements/Icons/SvgIcon";

type varTypes = {
  title: string;
  mainTitle: string;
  parent?: string;
  subParent?: string;
};

const Breadcrumbs = ({ title, mainTitle, parent, subParent }: varTypes) => {
  return (
    <div>
      <Container fluid={true}>
        <div className="page-title">
          <Row>
            <Col xs={6} className="p-0">
              <h4>{mainTitle}</h4>
            </Col>
            <Col xs={6} className="p-0">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href={`/dashboard`}>
                    <SvgIcon iconId="stroke-home" />
                  </Link>
                </li>
                <li className="breadcrumb-item">{parent}</li>
                {subParent ? (
                  <li className="breadcrumb-item">{subParent}</li>
                ) : (
                  ""
                )}
                <li className="breadcrumb-item active">{title}</li>
              </ol>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
