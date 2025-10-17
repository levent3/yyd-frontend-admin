import { CardHeader } from "reactstrap";
import {StockResult,StockResultSpan1,StockResultSpan2,StockResultSpan3,StockResultSpan4,} from "utils/Constant";

const StockResultCardHeader = () => {
  return (
    <CardHeader className="pb-0 card-no-border">
      <h4>{StockResult}</h4>
      <span dangerouslySetInnerHTML={{ __html: StockResultSpan1 }} />
      <span dangerouslySetInnerHTML={{ __html: StockResultSpan2 }} />
      <span dangerouslySetInnerHTML={{ __html: StockResultSpan3 }} />
      <span dangerouslySetInnerHTML={{ __html: StockResultSpan4 }} />
    </CardHeader>
  );
};

export default StockResultCardHeader;
