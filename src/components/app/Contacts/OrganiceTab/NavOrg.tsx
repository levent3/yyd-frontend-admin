import { organizationList } from "Data/Contact";
import { navOrgPropType } from "Types/ContactType";
import Image from "next/image";
import { useState } from "react";
import { Col, Media, Nav, NavItem, NavLink } from "reactstrap";
import { Href, ImgPath } from "utils/Constant";

const NavOrg = ({ callback }: navOrgPropType) => {
  const [organizationTab, setOrganizationTab] = useState("1");
  return (
    <Col xl={4} md={5} className="xl-50">
      <Nav className="flex-column nav-pills" >
        {organizationList.map((item) => (
          <NavItem id="myTab" role="tablist" key={item.id}>
            <NavLink href={Href} className={organizationTab === item.activeTab ? "active" : ""}
              onClick={() => { setOrganizationTab(item.activeTab); callback(item.activeTab);}}>
              <Media>
                <Image
                width={50}
                height={50}
                  className="p-0 img-50 img-fluid m-r-20 rounded-circle"
                  src={`${ImgPath}/user/${item.image}`}
                  alt="Image"
                />
                <Media body>
                  <h6>{item.name}</h6>
                  <p>{item.email}</p>
                </Media>
              </Media>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </Col>
  );
};

export default NavOrg;