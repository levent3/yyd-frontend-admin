import SvgIcon from "CommonElements/Icons/SvgIcon";
import { commonCurrencyWidgetPropsType } from "Types/GeneralWidget";
import CurrencyWidgetCard from "./CurrencyWidgetCard";

const CommonCurrencyWidget = ({ data }: commonCurrencyWidgetPropsType) => {
  return (
    <div className={`currency-widget widget-currency ${data.color} `}>
      <div className="d-flex">
        <div className="currency-icon-widget">
          <SvgIcon iconId={data.icon} />
        </div>
        <div>
          <h6>{data.title} <span className="f-light">{data.sortName}</span></h6>
        </div>
      </div>
      <CurrencyWidgetCard data={data} />
    </div>
  );
};

export default CommonCurrencyWidget;
