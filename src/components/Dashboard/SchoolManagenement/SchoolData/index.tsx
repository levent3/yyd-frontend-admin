import { schoolCardData } from "Data/Dashboard/SchoolManagement";
import { Card, CardBody, Col } from "reactstrap";
import DashboardHead from "../../DashboardCommon/DashboardHead";
import Image from "next/image";
import { ImgPath } from "utils/Constant";

const SchoolData = () => {
  return (
    <>
      {schoolCardData.map((data, index) => (
        <Col md={4} className={data.smallScreenClass ? "col-sm-6" : ""} key={index}>
          <Card className="widget-hover overflow-hidden">
            <DashboardHead title={data.header} headClass="card-no-border pb-2"/>
            <CardBody className="pt-0 count-student">
              <div className="school-wrapper">
                <div className="school-header">
                  <h4 className={`txt-${data?.amountClass}`}>{data.amount}</h4>
                  <div className="d-flex gap-1 align-items-center flex-wrap pt-xxl-0 pt-2">
                    {data.downIcon ? (<i className="icon-arrow-down f-light" />) : (<i className="icon-arrow-up f-light" />)}
                    <span className="f-w-500 f-light">{data.growth}</span>
                    <p className="text-muted">than last month</p>
                  </div>
                </div>
                <div className="school-body">
                  <Image height={59} width={70} src={`${ImgPath}/dashboard-7/${data.imageName}`} alt="total teachers"/>
                  <div className="right-line">
                    {data.rightLineImage ? <Image height={79} width={144} src={`${ImgPath}/dashboard-7/line.png`} alt="line"/> :null}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default SchoolData;
