import { hoverTableData } from "Data/table/ReactStrapTableData";

const HoverableRowsTableBody = () => {
  return (
    <tbody>
      {hoverTableData.map((item) => (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>
            <div className="d-flex align-items-center">
              <span className={`${item.bgClass} rounded-100 p-1 me-2 d-flex align-items-center`}>{item.icon}</span>
              <span className={`${item.bgClass2}`}>{item.status}</span>
            </div>
          </td>
          <td>{item.signalName}</td>
          <td>{item.security}</td>
          <td>{item.stage}</td>
          <td>{item.schedule}</td>
          <td>{item.teamLead}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default HoverableRowsTableBody;
