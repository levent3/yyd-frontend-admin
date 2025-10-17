import { Button, CardBody } from "reactstrap";
import { TapToYourBalance, TotalOffers, USD } from "utils/Constant";

const NftBalanceCardBody = () => {
  return (
    <CardBody className="pt-0">
      <h3>$904,500.10</h3>
      <p className="f-light">
        <span>{TotalOffers}</span>
        <span className="ms-2">
          {USD} 456,000 <span className="font-success">(67,11%)</span>
        </span>
      </p>
      <Button color="transparent" className="bg-light-primary font-primary w-100">
        {TapToYourBalance}
        <i className="ms-2 icofont icofont-arrow-right" />
      </Button>
    </CardBody>
  );
};

export default NftBalanceCardBody;
