import React from "react";
import { Button, Card, CardBody, Col, Media } from "reactstrap";
import { ImgPath, Welcometext, Welcometocuba, WhatsNew } from "utils/Constant";
import ClockMain from "./Clock";

const GreetingCard = () => {
  return (
    <Col xxl={4} sm={6} className="box-col-6">
      <Card className="profile-box">
        <CardBody>
          <Media className="media-wrapper justify-content-between">
            <Media body>
              <div className="greeting-user">
                <h4 className="f-w-600">{Welcometocuba}</h4>
                <p>{Welcometext}</p>
                <div className="whatsnew-btn">
                  <Button color="" className="btn btn-outline-white" href="#">
                    {WhatsNew}
                  </Button>
                </div>
              </div>
            </Media>
            <ClockMain />
            <div className="cartoon">
              <img
                className="img-fluid"
                src={`${ImgPath}/dashboard/cartoon.svg`}
                alt="vector women with leptop"
              />
            </div>
          </Media>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GreetingCard;
