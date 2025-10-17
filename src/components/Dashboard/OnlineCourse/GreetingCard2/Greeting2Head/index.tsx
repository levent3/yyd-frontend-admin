import SvgIcon from "CommonElements/Icons/SvgIcon";
import React from "react";
import { Button, CardHeader } from "reactstrap";
import { BetterResults, DoYouWantToGet, MoreDetails } from "utils/Constant";

const Greeting2Head = () => {
  return (
    <CardHeader className="card-header card-no-border">
      <h5>{DoYouWantToGet}</h5>
      <span className="f-14 f-w-500 f-light">{BetterResults}</span>
      <Button yag="a" color="primary" className="btn-hover-effect" href="#">
        {MoreDetails}
        <span className="ms-1">
          <SvgIcon className="fill-icon" iconId="arrowright" />
        </span>
      </Button>
    </CardHeader>
  );
};

export default Greeting2Head;