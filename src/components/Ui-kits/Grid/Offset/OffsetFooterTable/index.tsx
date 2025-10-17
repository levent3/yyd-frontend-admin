import React from "react";
import { Table } from "reactstrap";
import { Class, OffsetClass, OffsetStep, Valueclass } from "utils/Constant";

const OffsetDataTable = () => {
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
              <code>{OffsetClass}</code>
            </td>
            <td>{OffsetStep}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default OffsetDataTable;
