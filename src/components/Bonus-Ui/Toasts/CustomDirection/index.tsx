import CardHead from "CommonElements/CardHead";
import React from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, Col } from "reactstrap";
import {
  BottomCenter,
  BottomLeft,
  BottomRight,
  Custom_Directions,
  TopCenter,
  TopLeft,
  TopRight,
} from "utils/Constant";

const CustomDirections = () => {
  const directiontoaster = (toastname: string) => {
    switch (toastname) {
      case "Top-Left":
        toast.success("Top Left Notification !", {
          position: toast.POSITION.TOP_LEFT,
        });
        break;
      case "Top-Right":
        toast.warn("Top Center Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      case "Top-Center":
        toast.info("Top Right Notification !", {
          position: toast.POSITION.TOP_CENTER,
        });
        break;
      case "Bottom-Center":
        toast("Bottom Center Notification !", {
          position: toast.POSITION.BOTTOM_CENTER,
          theme: "light",
        });
        break;
      case "Bottom-Left":
        toast.error("Bottom Left Notification !", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        break;
      case "Bottom-Right":
        toast("Bottom Right Notification !", {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "dark",
        });
        break;
      default:
        break;
    }
  };
  return (
    <Col sm={12}>
      <Card>
        <CardHead title={Custom_Directions} subTitle={[]} />
        <CardBody className="common-flex">
          <Button
            className="m-1"
            color="success"
            onClick={() => directiontoaster(TopLeft)}
          >
            {TopLeft}
          </Button>
          <Button
            className="m-1"
            color="info"
            onClick={() => directiontoaster(TopCenter)}
          >
            {TopCenter}
          </Button>
          <Button
            className="m-1"
            color="warning"
            onClick={() => directiontoaster(TopRight)}
          >
            {TopRight}
          </Button>
          <Button
            className="m-1"
            color="danger"
            onClick={() => directiontoaster(BottomLeft)}
          >
            {BottomLeft}
          </Button>
          <Button
            className="m-1 text-dark"
            color="light"
            onClick={() => directiontoaster(BottomCenter)}
          >
            {BottomCenter}
          </Button>
          <Button
            className="m-1"
            color="dark"
            onClick={() => directiontoaster(BottomRight)}
          >
            {BottomRight}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomDirections;
