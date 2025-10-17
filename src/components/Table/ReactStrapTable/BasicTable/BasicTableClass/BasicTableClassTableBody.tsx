import { basicTableData } from "Data/table/ReactStrapTableData";
import Image from "next/image";
import { ImgPath } from "utils/Constant";

const BasicTableClassTableBody = () => {
  return (
    <tbody>
      {basicTableData.map((item) => (
        <tr key={item.id} className={item.borderColor}>
          <td>{item.id}</td>
          <td>
            <Image width={30} height={30} className="img-30 me-2" src={`${ImgPath}/user/${item.img}`} alt="imagese"/>
            {item.firstName}
          </td>
          <td>{item.lastName}</td>
          <td>{item.userName}</td>
          <td>{item.role}</td>
          <td>{item.company}</td>
          <td>
            <div className={`badge ${item.badgeClass}`}>{item.language}</div>
          </td>
          <td>{item.country}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default BasicTableClassTableBody;
