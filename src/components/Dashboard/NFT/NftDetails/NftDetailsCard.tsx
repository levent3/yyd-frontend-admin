import { nftDetailsCardData } from "Data/Dashboard/NFT";
import Image from "next/image";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import { ImgPath, View } from "utils/Constant";
import { Href } from "../../../../../utils/Constant/index";

const NftDetailsCard = () => {
  return (
    <>
      {nftDetailsCardData.map((data, index) => (
        <div className={data.colClassName ? data.colClassName : "col-xxl-4 col-sm-6"} key={index}>
          <Card className="papernote-wrap statistics-card widget-hover">
            <CardHeader className="card-no-border">
              <div className="header-top">
                <h5>{data.header}</h5>
                <a className="f-light d-flex align-items-center" href={Href}>
                  {View} <i className="f-w-700 icon-arrow-right" />
                </a>
              </div>
            </CardHeader>
            <CardBody className="pt-0 artist-table activity-table">
              <div className="appointment-table customer-table table-responsive">
                <Table className="table-bordernone">
                  <tbody>
                    <tr>
                      <td>
                        <Image width={40} height={40} className="img-fluid img-40 rounded-circle me-2" src={`${ImgPath}/dashboard-6/author/${data.imageName}.png`} alt="author"/>
                      </td>
                      <td className="img-content-box">
                        <a className="d-block f-w-500" href={Href}>{data.userName}</a>
                        <span className="f-light">
                          {data.userEmail ? (data.userEmail) : (<>Bought by for<span className="font-primary d-inline-block">0.98 ETH</span></>)}
                        </span>
                      </td>
                      <td className="text-end">{data.content}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </div>
      ))}
    </>
  );
};

export default NftDetailsCard;
