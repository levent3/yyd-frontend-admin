import React from "react";
import { Card, CardBody } from "reactstrap";
import Greeting2Head from "./Greeting2Head";
import Image from "next/image";
import greetingImage from "/public/assets/images/dashboard-3/better.png";
import SquaregroupUi from "../GreetingGrid/SquareGroupUi";

const GreetingCard2 = () => {
  return (
    <Card className="get-card overflow-hidden details-card">
      <Greeting2Head />
      <CardBody className="pt-0">
        <div className="get-image text-center">
          <Image
            className="img-fluid"
            src={greetingImage}
            alt="leptop with men vector"
          />
        </div>
      </CardBody>
      <SquaregroupUi />
    </Card>
  );
};

export default GreetingCard2;
