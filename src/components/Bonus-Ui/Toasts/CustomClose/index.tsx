import CardHead from "CommonElements/CardHead";
import React from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, Col } from "reactstrap";
import {
  AutoClose05,
  AutoClose1,
  AutoClose15,
  AutoClose5,
  CustomAutoclose,
} from "utils/Constant";

const CustomClose = () => {
  const autoclosetoaster = (toastname: string) => {
    switch (toastname) {
      case AutoClose15:
        toast.success("Auto Close in 15 sec !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 15000,
        });
        break;
      case AutoClose5:
        toast.info("Auto close in 5 sec !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
        break;
      case AutoClose1:
        toast.warn("Auto close in 1 sec !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        break;
      case AutoClose05:
        toast.error("Auto close in 0.5 sec !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 500,
        });
        break;
      default:
        break;
    }
  };
  return (
    <Col sm={12} md={6}>
      <Card>
        <CardHead title={CustomAutoclose} subTitle={[]} />
        <CardBody className="common-flex">
          <Button
            className="m-1"
            color="success"
            onClick={() => autoclosetoaster(AutoClose15)}
          >
            {AutoClose15}
          </Button>
          <Button
            className="m-1"
            color="info"
            onClick={() => autoclosetoaster(AutoClose5)}
          >
            {AutoClose5}
          </Button>
          <Button
            className="m-1"
            color="warning"
            onClick={() => autoclosetoaster(AutoClose1)}
          >
            {AutoClose1}
          </Button>
          <Button
            className="m-1"
            color="danger"
            onClick={() => autoclosetoaster(AutoClose05)}
          >
            {AutoClose05}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomClose;
