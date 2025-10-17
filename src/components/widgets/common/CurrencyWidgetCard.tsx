import { TrendingUp } from "react-feather";
import { Card, CardBody } from "reactstrap";
import CurrencyWidgetChart from "./CurrencyWidgetChart";
import { commonCurrencyWidgetPropsType } from "Types/GeneralWidget";

const CurrencyWidgetCard = ({ data }: commonCurrencyWidgetPropsType) => {
  return (
    <Card>
      <CardBody className="d-flex">
        <div className="currency-chart-wrap">
          <CurrencyWidgetChart chartData={data.chart} />
        </div>
        <div className={`bg-light-${data.color} text-center`}>
          <h5 className="mb-0">${data.price}</h5>
          <span className={`f-12 f-w-500 font-${data.color}`}>
            <TrendingUp className="me-1" />+{data.gros}%
          </span>
        </div>
      </CardBody>
    </Card>
  );
};

export default CurrencyWidgetCard;
