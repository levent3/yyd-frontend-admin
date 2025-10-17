import React from "react";
import { Table } from "reactstrap";
import {
  Class,
  Valueclass,
  VerticalPosition,
  Verticalclass,
} from "utils/Constant";

const FooterTable = () => {
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
              <code>{Verticalclass}</code>
            </td>
            <td>{VerticalPosition}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default FooterTable;
