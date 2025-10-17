import {Id,Task,Email,Phone,Assign,Date,Price,Status,Progress,} from "utils/Constant";

const ResponsiveClassTableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">{Id}</th>
        <th scope="col">{Task}</th>
        <th scope="col">{Email}</th>
        <th scope="col">{Phone}</th>
        <th scope="col">{Assign}</th>
        <th scope="col">{Date}</th>
        <th scope="col">{Price}</th>
        <th scope="col">{Status}</th>
        <th scope="col">{Progress}</th>
      </tr>
    </thead>
  );
};

export default ResponsiveClassTableHead;
