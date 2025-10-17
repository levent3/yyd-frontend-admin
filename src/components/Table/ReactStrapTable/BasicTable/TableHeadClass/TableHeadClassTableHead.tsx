import React from "react";
import { Id, FirstName, LastName, UserName } from "utils/Constant";

const TableHeadClassTableHead = () => {
  return (
    <thead className="table-dark">
      <tr>
        <th scope="col">{Id}</th>
        <th scope="col">{FirstName}</th>
        <th scope="col">{LastName}</th>
        <th scope="col">{UserName}</th>
      </tr>
    </thead>
  );
};

export default TableHeadClassTableHead;
