import { Id, Name, OrderId, Price, Quantity, Total } from "utils/Constant";

const BreckPointClassTableHead = () => {
  return (
    <thead>
      <tr>
        <th>{Id}</th>
        <th>{Name}</th>
        <th>{OrderId}</th>
        <th>{Price}</th>
        <th>{Quantity}</th>
        <th>{Total}</th>
      </tr>
    </thead>
  );
};

export default BreckPointClassTableHead;
