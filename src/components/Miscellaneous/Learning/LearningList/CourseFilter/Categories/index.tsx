import { Card, Col, Collapse, CardBody } from "reactstrap";
import { useState } from "react";
import DesignCategories from "./DesignCategories";
import DevelopmentCategories from "./DevelopmentCategories";
import HeaderWithIcon from "CommonElements/HeaderWithIcon";
import { Categories } from "utils/Constant";

const CategoriesCheckBoxes = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Col xl={12}>
      <Card>
        <HeaderWithIcon Heading={Categories} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <CardBody className="filter-cards-view animate-chk">
            <DesignCategories />
            <DevelopmentCategories />
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default CategoriesCheckBoxes;
