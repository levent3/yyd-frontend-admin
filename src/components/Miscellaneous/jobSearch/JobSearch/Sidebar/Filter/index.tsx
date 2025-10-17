import { useState } from "react";
import { Button, Card, CardBody,  Col, Collapse } from "reactstrap";
import SearchAndMap from './SearchAndMap';
import FilterCheckBox from "./FilterCheckBox";
import { FilterHeading, FindJobs } from "utils/Constant";
import HeaderWithIcon from "CommonElements/HeaderWithIcon";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div className="accordion" id="accordionExample">
      <Card>
        <HeaderWithIcon Heading={FilterHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
          <CardBody className="filter-cards-view animate-chk">
            <SearchAndMap />
            <FilterCheckBox />
            <Button className="text-center" color="primary" >
              {FindJobs}
            </Button>
          </CardBody>
        </Collapse>
      </Card>
    </div>
  );
};

export default Filter;
