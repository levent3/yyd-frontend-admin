import { dashedBorderData } from "Data/table/ReactStrapTableData";

const DashedBorderClassTableBody = () => {
  return (
    <tbody>
      {dashedBorderData.map((item) => (
        <tr className="dashed" key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td>{item.type}</td>
          <td>{item.time}</td>
          <td>{item.trainer}</td>
          <td>{item.spots}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default DashedBorderClassTableBody;
