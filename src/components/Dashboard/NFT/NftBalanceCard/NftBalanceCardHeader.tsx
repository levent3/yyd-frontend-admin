import { CardHeader } from "reactstrap";
import { YourBalance, DropDownOption } from "utils/Constant";
import CommonDrop from "../CommonDrop";

const NftBalanceCardHeader = () => {
  return (
    <CardHeader className="card-no-border">
      <div className="header-top">
        <h5>{YourBalance}</h5>
        <div className="dropdown icon-dropdown">
          <CommonDrop/>
        </div>
      </div>
      <div className="d-flex align-items-center f-light mt-1">
        <p className="mb-0">cro09hjgnbfdfsdfdsfds4uhjiff...</p>
        <i className="fa fa-clipboard ms-2" />
      </div>
    </CardHeader>
  );
};

export default NftBalanceCardHeader;
