import { Card, CardBody, CardHeader, Col, Input, InputGroup, InputGroupText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import OurProduct from "./OurProduct";
import { OurProductDetail, OurProductDetailDropDown, OurProductHeader, SelectCategory } from "utils/Constant";
import { Search } from "react-feather";
import { useState } from "react";

const OurProducts = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Col xl={12}>
      <Card>
        <CardHeader className="card-no-border">
          <div className="main-product-wrapper">
            <div className="product-header">
              <h5>{OurProductHeader}</h5>
              <p className="f-m-light mt-1 text-gray f-w-500">{OurProductDetail}</p>
            </div>
            <div className="product-body">
              <InputGroup className="product-search">
                <InputGroupText>
                  <Search className="search-icon text-gray" />
                </InputGroupText>
                <Input type="text" placeholder="Search here.." list="datalistOptionssearch" id="exampleDataList1" />                
                <datalist id="datalistOptionssearch">
                  <option value="Bluetooth Calling Smartwatch" />
                  <option value="Microsoft Surface Laptop" />
                  <option value="Gaming Over Ear Headphone" />
                  <option value="Apple iPhone 14 Plus" />
                </datalist>
              </InputGroup>
              <Dropdown className="product-search-bar" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle color="" className="btn dropdown-toggle w-100 px-4 pe-5 border text-gray">
                  {SelectCategory}
                </DropdownToggle>
                <DropdownMenu end className="dropdown-block w-100">
                  {OurProductDetailDropDown.map((data, index) => (
                    <DropdownItem key={index}>{data}</DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </CardHeader>
        <CardBody className="main-our-product">
          <OurProduct />
        </CardBody>
      </Card>
    </Col>
  );
};

export default OurProducts;
