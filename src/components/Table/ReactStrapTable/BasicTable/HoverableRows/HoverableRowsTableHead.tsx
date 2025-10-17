import {Id,Status,SignalName,Security,Stage,Schedule,TeamLead,} from "utils/Constant";

const HoverableRowsTableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">{Id}</th>
        <th scope="col">{Status}</th>
        <th scope="col">{SignalName}</th>
        <th scope="col">{Security}</th>
        <th scope="col">{Stage}</th>
        <th scope="col">{Schedule}</th>
        <th scope="col">{TeamLead}</th>
      </tr>
    </thead>
  );
};

export default HoverableRowsTableHead;
