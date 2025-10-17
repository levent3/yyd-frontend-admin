import { inverseTable } from "Data/table/ReactStrapTableData";

const InverseTableClassTableBody = () => {
  return (
    <tbody>
      {inverseTable.map((item) => (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.office}</td>
          <td>{item.role}</td>
          <td>{item.salary}</td>
          <td>{item.join}</td>
          <td>{item.age}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default InverseTableClassTableBody;
