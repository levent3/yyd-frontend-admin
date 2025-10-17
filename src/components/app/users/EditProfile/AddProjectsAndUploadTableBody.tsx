import { addProjectsAndUploadData } from "Data/Users";
import {Delete,Edit,Href,UntrammelledPrevents,Update} from "utils/Constant";

const AddProjectsAndUploadTableBody = () => {
  return (
    <tbody>
      {addProjectsAndUploadData.map((data, index) => (
        <tr key={index}>
          <td>
            <a className="text-inherit" href={Href}>
              {UntrammelledPrevents}
            </a>
          </td>
          <td>{data.date}</td>
          <td>
            <span className={`status-icon ${data.statusClass}`} /> {data.status}
          </td>
          <td>{data.price}</td>
          <td className="text-end">
            <a className="btn btn-primary btn-sm" href={Href}>
              <i className="fa fa-pencil" /> {Edit}
            </a>
            <a className="btn btn-transparent btn-sm" href={Href}>
              <i className="fa fa-link" /> {Update}
            </a>
            <a className="btn btn-danger btn-sm" href={Href}>
              <i className="fa fa-trash" /> {Delete}
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AddProjectsAndUploadTableBody;
