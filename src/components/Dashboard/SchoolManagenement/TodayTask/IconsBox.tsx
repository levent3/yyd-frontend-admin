import { dropDownIconsList } from "../../../../../Data/Dashboard/SchoolManagement/index";

const IconsBox = () => {
  return (
    <td className="icons-box">
      <div className="d-flex align-items-center gap-2">
        {dropDownIconsList.map((data, index) => (
          <div key={index} className="square-white">
            {data.icon}
          </div>
        ))}
      </div>
    </td>
  );
};

export default IconsBox;
