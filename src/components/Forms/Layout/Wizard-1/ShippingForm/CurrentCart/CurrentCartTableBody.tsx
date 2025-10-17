import { currentCartTableBodyData } from "Data/Forms/Layout";
import Image from "next/image";
import { ImgPath } from "utils/Constant";

const CurrentCartTableBody = () => {
  return (
    <tbody>
      {currentCartTableBodyData.map((data, index) => (
        <tr key={index}>
          <td>
            <Image height={50} width={46.5} src={`${ImgPath}${data.imagePath}`} alt="t-shirt"/>
          </td>
          <td>
            <div>
              <h6>{data.productName}</h6>
              <span>{data.productSum}</span>
            </div>
          </td>
          <td>
            <p>{data.price}</p>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default CurrentCartTableBody;
