import Image from "next/image";
import { ImgPath } from "utils/Constant";
import { weeklySalesStatusTableData } from 'Data/Dashboard/NFT';

const WeeklySalesStatusTableBody = () => {
  return (
    <tbody>
      {weeklySalesStatusTableData.map((data, index) => (
        <tr key={index}>
          <td>
            <div className="d-flex align-items-center gap-2">
              <Image width={32} height={32} src={`${ImgPath}/dashboard-6/sales/${index + 1}.png`} alt="artwork"/>
              <div>
                <h6 className="f-14">{data.heading}</h6>
                <span className="f-light f-12">Designning.co</span>
              </div>
            </div>
          </td>
          <td>
            <h6 className="f-14">{data.sale}</h6>
          </td>
          <td className="text-end">
            <span className="badge badge-light-success f-w-500">
              {data.earnings}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default WeeklySalesStatusTableBody;
