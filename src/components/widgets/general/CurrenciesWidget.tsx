import { CurrenciesWidgetsData } from "Data/widgets/general";
import { Col } from "reactstrap";
import CommonCurrencyWidget from "../common/CommonCurrencyWidget";

const CurrenciesWidget = () => {
  return (
    <>
      {CurrenciesWidgetsData.map((item, i) => (
        <Col key={i} sm={4} xxl={2}>
          <CommonCurrencyWidget data={item} />
        </Col>
      ))}
    </>
  );
};

export default CurrenciesWidget;
