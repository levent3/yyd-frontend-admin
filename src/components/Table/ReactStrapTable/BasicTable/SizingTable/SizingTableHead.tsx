import {Id,EmployeeName,Date,Status,Hours,Performance,} from "utils/Constant";

const SizingTableHead = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">{Id}</th>
        <th scope="col">{EmployeeName}</th>
        <th scope="col">{Date}</th>
        <th scope="col">{Status}</th>
        <th scope="col">{Hours}</th>
        <th scope="col">{Performance}</th>
      </tr>
    </thead>
  );
};

export default SizingTableHead;
