import { trendingCreatorTableData } from "Data/Dashboard/NFT";
import Image from "next/image";
import { CardBody, Table } from "reactstrap";
import { Href, ImgPath, Items, TotalUSD } from "utils/Constant";

const TrendingCreatorCardBody = () => {
  return (
    <CardBody className="pt-0 activity-card">
      <div className="appointment-table customer-table table-responsive">
        <Table className="table-bordernone">
          <tbody>
            {trendingCreatorTableData.map((data, index) => (
              <tr key={index}>
                <td>
                  <Image className="img-fluid img-40 rounded-circle me-2" src={`${ImgPath}/dashboard-6/${index + 1}.png`} alt="building" width={40} height={40}/>
                </td>
                <td className="img-content-box">
                  <a className="d-block f-w-500" href={Href}>{data.heading}</a>
                  <span className="f-light">{data.items} {Items}</span>
                </td>
                <td className="text-end">
                  <span className="f-w-500">${data.price}</span>
                  <span className="d-block f-light">{TotalUSD}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </CardBody>
  );
};

export default TrendingCreatorCardBody;
