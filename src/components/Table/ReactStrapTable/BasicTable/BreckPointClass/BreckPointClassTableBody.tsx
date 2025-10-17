import { breckPointSpecific } from "Data/table/ReactStrapTableData";

const BreckPointClassTableBody = () => {
  return (
    <tbody>
      {breckPointSpecific.map((item) => (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td>{item.oderid}</td>
          <td>{item.price}</td>
          <td>{item.qty}</td>
          <td>{item.total}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default BreckPointClassTableBody;
