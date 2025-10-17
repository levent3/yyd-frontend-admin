import { Col } from "reactstrap";
import { Loss, Profit } from "utils/Constant";

const ProfitAndLoss = () => {
  return (
    <Col xs={7}>
      <div className="text-md-end">
        <ul>
          <li>{Profit}
            <span className="product-stts txt-success ms-2">{8989}
              <i className="icon-angle-up f-12 ms-2 me-0"></i>
            </span>
          </li>
          <li>{Loss}
            <span className="product-stts txt-danger ms-2">{2560}
              <i className="icon-angle-down f-12 ms-2 me-0"></i>
            </span>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default ProfitAndLoss;
