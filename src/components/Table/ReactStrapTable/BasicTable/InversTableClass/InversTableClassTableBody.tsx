import { inverseTableData } from "Data/table/ReactStrapTableData";

const InversTableClassTableBody = () => {
  return (
    <tbody>
      {inverseTableData.map((item) => (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.company}</td>
          <td>{item.credit}</td>
          <td>{item.email}</td>
          <td>{item.role}</td>
          <td>{item.country}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default InversTableClassTableBody;
