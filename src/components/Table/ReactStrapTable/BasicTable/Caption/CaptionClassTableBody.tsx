import { captionTableData } from "Data/table/ReactStrapTableData";

const CaptionClassTableBody = () => {
  return (
    <tbody>
      {captionTableData.map((item) => (
        <tr key={item.id}>
          <th>{item.id}</th>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.exp}</td>
          <td>{item.sex}</td>
          <td>{item.contact}</td>
          <td>{item.age}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default CaptionClassTableBody;
