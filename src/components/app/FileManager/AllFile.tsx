import { allFileSData } from "Data/FileManager";
import { AllFiles, LastOpen, RecentlyOpenedFiles } from "utils/Constant";

const AllFile = () => {
  return (
    <>
      <h4 className="mb-3">{AllFiles}</h4>
      <h6>{RecentlyOpenedFiles}</h6>
      <ul className="files">
        {allFileSData.map((item, i) => (
          <li className="file-box" key={i}>
            <div className="file-top">
              <i className={item.icon} />
              <i className="fa fa-ellipsis-v f-14 ellips" />
            </div>
            <div className="file-bottom">
              <h6>{item.name}</h6>
              <p className="mb-1">{item.size}</p>
              <p>
                <b>{LastOpen}</b>
                {item.modify}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllFile;
