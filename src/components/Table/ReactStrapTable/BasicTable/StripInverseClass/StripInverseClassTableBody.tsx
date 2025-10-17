import { stripedWithInverseTableData } from "Data/table/ReactStrapTableData";

const StripInverseClassTableBody = () => {
  return (
    <tbody className="text-white">
      {stripedWithInverseTableData.map((item) => (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.dessert}</td>
          <td>{item.type}</td>
          <td>{item.calories}</td>
          <td>{item.weigth}</td>
          <td>{item.fat}</td>
          <td>{item.price}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default StripInverseClassTableBody;
