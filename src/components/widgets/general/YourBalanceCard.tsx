import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";
import {Href,ImgPath,YourBalance,YourTotalBalance} from "../../../../utils/Constant/index";
import SvgIcon from "CommonElements/Icons/SvgIcon";
import BalanceList from "./BalanceList";

const YourBalanceCard = () => {
  return (
    <Col xxl={3} xl={4} sm={6} className="box-col-6">
      <Card className={`balance-box  height-equal-2`} style={{ minHeight: "369.594px" }}>
        <CardBody className="d-flex align-items-center justify-content-center">
          <div className="balance-profile">
            <div className="balance-img">
              <Image width={64} height={64} src={`${ImgPath}/dashboard-4/user.png`} alt="user vector"/>
              <a href={Href} className="edit-icon"><SvgIcon iconId="pencil" /></a>
            </div>
            <span className="f-light d-block">{YourBalance}</span>
            <h5 className="mt-1">${YourTotalBalance}</h5>
            <BalanceList />            
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default YourBalanceCard;
