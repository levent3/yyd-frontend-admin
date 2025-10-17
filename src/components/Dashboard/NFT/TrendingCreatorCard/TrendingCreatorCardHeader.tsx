import React from "react";
import { CardHeader } from "reactstrap";
import { Href, TrendingCreator, View } from "utils/Constant";

const TrendingCreatorCardHeader = () => {
  return (
    <CardHeader className="card-no-border">
      <div className="header-top">
        <h5 className="m-0">{TrendingCreator}</h5>
        <div className="card-header-right-icon">
          <a href={Href}>{View}</a>
        </div>
      </div>
    </CardHeader>
  );
};

export default TrendingCreatorCardHeader;
