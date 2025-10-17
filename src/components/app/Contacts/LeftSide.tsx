import { Card, CardBody, Col, Media } from "reactstrap";
import { MarkJecnoEmail, MarkJecno, ImgPath, Href } from "utils/Constant";
import NavComponent from "./NavComponent";
import { Fragment, useCallback, useState, useContext } from "react";
import TabComponent from "./TabComponent";
import { ContactContext } from "helper/Contacts/index";
import Image from "next/image";

const LeftSide = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const { users } = useContext(ContactContext);
  const [activeTab, setActiveTab] = useState("1");
  const callback = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);
  return (
    <Fragment>
      <Col xl={3} className="box-col-6">
        <div className="md-sidebar">
          <a className="btn btn-primary md-sidebar-toggle" href={Href} onClick={() => setSideBarOpen(!sideBarOpen)}>contact filter</a>
          <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${sideBarOpen ? "open" : ""}`}>
            <div className="email-left-aside">
              <Card>
                <CardBody>
                  <div className="email-app-sidebar left-bookmark">
                    <Media>
                      <div className="media-size-email">
                        <Image width={52} height={52} className="me-3 rounded-circle" src={`${ImgPath}/user/user.png`} alt="" />
                      </div>
                      <Media body>
                        <h6 className="f-w-600">{MarkJecno}</h6>
                        <p>{MarkJecnoEmail}</p>
                      </Media>
                    </Media>
                    <NavComponent callbackActive={callback} />
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={9} md={12} className="box-col-12">
        <div className="email-right-aside bookmark-tabcontent contacts-tabs">
          <div className="email-body radius-left">
            <div className="ps-0">
              <TabComponent activeTab={activeTab} users={users} />
            </div>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};

export default LeftSide;