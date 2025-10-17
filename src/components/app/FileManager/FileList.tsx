import { fileListPropsType } from "Types/FileManagerType";
import { LastOpen } from "utils/Constant";

const FileList = ({ myFile }: fileListPropsType) => {
  return (
    <ul className="files">
      {myFile.map((data, i) => (
        <li key={i} className="file-box">
          <div className="file-top">
            <i className={data.icon}></i>
            <i className="fa fa-ellipsis-v f-14 ellips"></i>
          </div>
          <div className="file-bottom">
            <h6>{data.name}</h6>
            <p className="mb-1">{data.size}</p>
            <p>
              <b>{LastOpen}</b>
              {data.modify}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FileList;
