import { Card, CardBody, Col, Media } from "reactstrap";
import NavTab from "./NavTab";
import { Href, ImgPath, MARKJENCOEMAIL, MarkJecno } from "utils/Constant";
import Image from "next/image";
import { useState } from "react";

const SideBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <Col xl={3} className="box-col-6">
      <div className="md-sidebar">
        <a className="btn btn-primary md-sidebar-toggle" href={Href} onClick={() => setSideBarOpen(!sideBarOpen)}>bookmark filter</a>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${sideBarOpen ? "open" : ""}`}>
          <div className="email-left-aside">
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark">
                  <Media>
                    <div className="media-size-email">
                      <Image width={52} height={52} className="me-3 rounded-circle" src={`${ImgPath}/user/user.png`} alt="user"/>
                    </div>
                    <Media body>
                      <h6 className="f-w-600">{MarkJecno}</h6>
                      <p>{MARKJENCOEMAIL}</p>
                    </Media>
                  </Media>
                  <NavTab />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SideBar;
