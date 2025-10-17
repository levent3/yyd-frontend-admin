import React from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, Col } from "reactstrap";
import {
  BasicColorToasts,
  DangerToast,
  InfoToast,
  SuccessToast,
  WarningToast,
} from "../../../../../utils/Constant";
import CardHead from "CommonElements/CardHead";

const ColorToast = () => {
  const basictoaster = (toastname: string) => {
    switch (toastname) {
      case "success":
        toast.success("Success Notification !");
        break;
      case "info":
        toast.info("Info Notification !");
        break;
      case "warning":
        toast.warn("Warning Notification !");
        break;
      case "danger":
        toast.error("Danger Notification !");
        break;
      case "light":
        toast("Light Notification !", {
          theme: "light",
        });
        break;
      case "dark":
        toast("Dark Notification !", {
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
        <CardHead title={BasicColorToasts} subTitle={[]} />
        <CardBody className="common-flex">
          <Button
            className="m-1"
            color="success"
            onClick={() => basictoaster("success")}
          >
            {SuccessToast}
          </Button>
          <Button
            className="m-1"
            color="info"
            onClick={() => basictoaster("info")}
          >
            {InfoToast}
          </Button>
          <Button
            className="m-1"
            color="warning"
            onClick={() => basictoaster("warning")}
          >
            {WarningToast}
          </Button>
          <Button
            className="m-1"
            color="danger"
            onClick={() => basictoaster("danger")}
          >
            {DangerToast}
          </Button>
          <Button
            className="m-1 text-dark"
            color="light"
            onClick={() => basictoaster("light")}
          >
            {WarningToast}
          </Button>
          <Button
            className="m-1"
            color="dark"
            onClick={() => basictoaster("dark")}
          >
            {DangerToast}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColorToast;
