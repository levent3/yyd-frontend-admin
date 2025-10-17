import { Col } from "reactstrap";
import NftIncomeCardBody from "./NftIncomeCardBody";
import CommonHeaderWithDropDown from "@/components/Dashboard/common/CommonHeaderWithDropDown";
import { DropDownOption, Income } from "utils/Constant";

const NftIncome = () => {
  return (
    <Col xxl="6" xl="12" md="6" className="px-0">
      <CommonHeaderWithDropDown heading={Income} dropDownList={DropDownOption} caret={true} dropDownClass="card-header-right-icon" dropDownIcon={false}/>
      <NftIncomeCardBody />
    </Col>
  );
};

export default NftIncome;
