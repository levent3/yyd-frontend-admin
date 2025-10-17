import { responsiveTableData } from "Data/table/ReactStrapTableData";

const ResponsiveClassTableBody = () => {
  return (
    <tbody>
      {responsiveTableData.map((item) => (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.task}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.assign}</td>
          <td>{item.date}</td>
          <td>{item.price}</td>
          <td
            className={`${
              item.status === "Pending" ? "font-danger" : "font-success"
            }`}
          >
            {item.status}
          </td>
          <td>{item.progress}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ResponsiveClassTableBody;
