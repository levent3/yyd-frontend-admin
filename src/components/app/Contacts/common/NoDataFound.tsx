import CommonCardHeading from "CommonElements/CommonCardHeading";
import { noDataFoundPropsType } from "Types/ContactType";
import { Card, CardBody } from "reactstrap";
import { NoDataFound } from "utils/Constant";

const NoDataFoundClass = ({ title }: noDataFoundPropsType) => {
  return (
    <Card className="mb-0">
      <CommonCardHeading Heading={title} />
      <CardBody>
        <p>{NoDataFound} </p>
      </CardBody>
    </Card>
  );
};

export default NoDataFoundClass;
