import {Id,FirstName,LastName,Company,CreditVolume,Email,Role,Country,} from "utils/Constant";

const InversTableClassTableHead = () => {
  return (
    <thead className="tbl-strip-thad-bdr">
      <tr>
        <th scope="col">{Id}</th>
        <th scope="col">{FirstName}</th>
        <th scope="col">{LastName}</th>
        <th scope="col">{Company}</th>
        <th scope="col">{CreditVolume}</th>
        <th scope="col">{Email}</th>
        <th scope="col">{Role}</th>
        <th scope="col">{Country}</th>
      </tr>
    </thead>
  );
};

export default InversTableClassTableHead;
