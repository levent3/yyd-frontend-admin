import { captionTableData } from "Data/table/ReactStrapTableData";

const TableHeadClassTableBody = () => {
  return (
    <tbody>
      {captionTableData.slice(0, 3).map((item) => (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.userName}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableHeadClassTableBody;
