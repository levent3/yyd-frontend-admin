import { CardHeader } from "reactstrap";
import {StateSaving,StateSavingSpan1,StateSavingSpan2,StateSavingSpan3,StateSavingSpan4,} from "utils/Constant";

const StateSavingCardHeader = () => {
  return (
    <CardHeader className="pb-0 card-no-border">
      <h4>{StateSaving}</h4>
      <span dangerouslySetInnerHTML={{ __html: StateSavingSpan1 }} />
      <span dangerouslySetInnerHTML={{ __html: StateSavingSpan2 }} />
      <span dangerouslySetInnerHTML={{ __html: StateSavingSpan3 }} />
      <span dangerouslySetInnerHTML={{ __html: StateSavingSpan4 }} />
    </CardHeader>
  );
};

export default StateSavingCardHeader;
