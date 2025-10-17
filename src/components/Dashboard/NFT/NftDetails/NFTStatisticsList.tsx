import React from "react";
import { TotalArtSold, TotalEarning } from "utils/Constant";

const NFTStatisticsList = () => {
  return (
    <ul className="d-flex">
      <li>
        <span className="f-light">{TotalArtSold}</span>
        <h5>135</h5>
      </li>
      <li>
        <span className="f-light">{TotalEarning}</span>
        <h5>908 ETH</h5>
      </li>
    </ul>
  );
};

export default NFTStatisticsList;
