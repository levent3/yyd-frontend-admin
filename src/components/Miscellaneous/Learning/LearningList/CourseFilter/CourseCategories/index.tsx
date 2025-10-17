import { Card, Col, Collapse, CardBody, Button } from "reactstrap";
import { useState } from "react";
import SearchInput from "./SearchInput";
import CategoriesCheckBox from "./CategoriesCheckBox";
import DurationCheckBox from "./DurationCheckBox";
import PriceCheckBox from "./PriceCheckBox";
import StatusCheckBox from "./StatusCheckBox";
import HeaderWithIcon from "CommonElements/HeaderWithIcon";
import { Filter, FindCourse } from "utils/Constant";

const CourseCategories = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12}>
      <Card>
        <HeaderWithIcon Heading={FindCourse} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
          <CardBody className="filter-cards-view animate-chk">
            <SearchInput />
            <CategoriesCheckBox />
            <DurationCheckBox />
            <PriceCheckBox />
            <StatusCheckBox />
            <Button color="primary" className="text-center">
              {Filter}
            </Button>
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default CourseCategories;
