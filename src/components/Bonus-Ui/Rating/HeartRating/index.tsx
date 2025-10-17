import React from "react";
import { Card, Col } from "reactstrap";
import { Heart_Rating } from "../../../../../utils/Constant";
import HeartRatingBody from "./HeartRatingBody";
import CardHead from "CommonElements/CardHead";

const HeartRating = () => {
  const submenuObj = [
    {
      text: "Heart rating is displayed using ",
      code: ".fa-heart-o & .fa-heart",
    },
    {
      text: " class in rating symbol",
    },
  ];
  return (
    <Col xl={4} sm={12}>
      <Card>
        <CardHead title={Heart_Rating} subTitle={submenuObj} />
        <HeartRatingBody />
      </Card>
    </Col>
  );
};

export default HeartRating;
