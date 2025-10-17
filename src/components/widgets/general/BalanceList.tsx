import { ArrowDownRight, ArrowUpRight } from "react-feather";
import { Cash_Back, Investment_Constant } from "utils/Constant";

const BalanceList = () => {
  return (
    <ul>
      <li>
        <div className="balance-item danger">
          <div className="balance-icon-wrap">
            <div className="balance-icon"><ArrowDownRight /></div>
          </div>
          <div>
            <span className="f-12 f-light">{Investment_Constant}</span>
            <h5>78.8K</h5>
            <span className="badge badge-light-danger rounded-pill">-11.67%</span>
          </div>
        </div>
      </li>
      <li>
        <div className="balance-item success">
          <div className="balance-icon-wrap">
            <div className="balance-icon"><ArrowUpRight /></div>
          </div>
          <div>
            <span className="f-12 f-light">{Cash_Back}</span>
            <h5>19.7K</h5>
            <span className="badge badge-light-success rounded-pill">+10.67%</span>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default BalanceList;
