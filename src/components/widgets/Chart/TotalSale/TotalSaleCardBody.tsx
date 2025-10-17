import { CardBody, Col } from "reactstrap";
import { CompareLastMonth, TotalSaleHeading } from "utils/Constant";

const TotalSaleCardBody = () => {
  return (
    <CardBody className="row pb-0 m-0">
      <Col xl={9} lg={8} xs={9} className="p-0">
        <h6 className="mb-2">{TotalSaleHeading}</h6>
        <h4>$3654.00</h4>
        <span>{CompareLastMonth}</span>
      </Col>
      <Col xl={3} lg={4} xs={3} className="text-end p-0">
        <h6 className="txt-success">+65%</h6>
      </Col>
    </CardBody>
  );
};

export default TotalSaleCardBody;
