import React from "react";
import { Table } from "reactstrap";
import { Class, Valueclass, orderClass, orderPosition } from "utils/Constant";

const OrderFooterTable = () => {
  return (
    <div className="table-responsive">
      <Table className="w-100 footer-table footer-grid">
        <tbody>
          <tr>
            <th>{Class}</th>
            <th>{Valueclass}</th>
          </tr>
          <tr>
            <td>
              <code>{orderClass}</code>
            </td>
            <td>{orderPosition}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default OrderFooterTable;
