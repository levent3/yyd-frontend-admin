import {FirstName,LastName,Office,Position,Salary,JoinDate,Age,} from "utils/Constant";

const InverseTableClassTableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">{"#"}</th>
        <th scope="col">{FirstName}</th>
        <th scope="col">{LastName}</th>
        <th scope="col">{Office}</th>
        <th scope="col">{Position}</th>
        <th scope="col">{Salary}</th>
        <th scope="col">{JoinDate}</th>
        <th scope="col">{Age}</th>
      </tr>
    </thead>
  );
};

export default InverseTableClassTableHead;
