import React from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import {
  Bounce_Transition,
  Flip_Transition,
  SlideTransition,
  TransitionType,
  Zoom_Transition,
} from "utils/Constant";
import { Bounce, Flip, Slide, Zoom, toast } from "react-toastify";
import CardHead from "CommonElements/CardHead";

const TransitionToast = () => {
  const ChangeTransition = (type: string) => {
    switch (type) {
      case "Bounce":
        toast.success("Bounce Transition Notification ..!", {
          transition: Bounce,
        });
        break;
      case "Slide":
        toast.info("Bounce Transition Notification ..!", {
          transition: Slide,
        });
        break;
      case "Zoom":
        toast.warn("Bounce Transition Notification ..!", {
          transition: Zoom,
        });
        break;
      case "Flip":
        toast.error("Flip Transition Notification ..!", {
          transition: Flip,
        });
        break;
      default:
        break;
    }
  };
  return (
    <Col sm={12} md={6}>
      <Card>
        <CardHead title={TransitionType} subTitle={[]} />
        <CardBody className="common-flex">
          <Button
            color="success"
            className="m-1"
            onClick={() => {
              ChangeTransition("Bounce");
            }}
          >
            {Bounce_Transition}
          </Button>
          <Button
            color="info"
            className="m-1"
            onClick={() => {
              ChangeTransition("Slide");
            }}
          >
            {SlideTransition}
          </Button>
          <Button
            color="warning"
            className="m-1"
            onClick={() => {
              ChangeTransition("Zoom");
            }}
          >
            {Zoom_Transition}
          </Button>
          <Button
            color="danger"
            className="m-1"
            onClick={() => {
              ChangeTransition("Flip");
            }}
          >
            {Flip_Transition}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TransitionToast;
