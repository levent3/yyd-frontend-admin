import { sizingTableData } from "Data/table/ReactStrapTableData";

const SizingTableBody = () => {
  return (
    <tbody>
      {sizingTableData.map((item) => (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td>{item.date}</td>
          <td className={`${item.status === "On leave" ? "text-danger" : "text-success"}`}>
            {item.status}
          </td>
          <td>{item.time}</td>
          <td>{item.performance}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default SizingTableBody;
