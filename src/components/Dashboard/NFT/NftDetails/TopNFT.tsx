import { Card, CardBody, CardHeader, Col, Table } from "reactstrap";
import {Collection,Hours24,Items,TopNFTHeading,Volume, WeeklyMonDropdown,} from "utils/Constant";
import TopNFTTableBody from "./TopNFTTableBody";
import CommonHeaderWithDropDown from "../../common/CommonHeaderWithDropDown";
import CommonDrop from "../CommonDrop";

const TopNFT = () => {
  return (
    <Col xxl={8} lg={12} md={6}>
      <Card>
      <CardHeader className="card-no-border">
        <div className="header-top">
          <h5>{TopNFTHeading}</h5>
          <div className="dropdown icon-dropdown">
            <CommonDrop />
          </div>
        </div>
      </CardHeader>
        <CardBody className="pt-0">
          <div className="recent-table table-responsive nft-table">
            <Table>
              <thead>
                <tr>
                  <th className="f-light">{Collection}</th>
                  <th className="f-light">{Volume}</th>
                  <th className="f-light">{Hours24}</th>
                  <th className="f-light text-end">{Items}</th>
                </tr>
              </thead>
              <TopNFTTableBody/>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopNFT;
