import { productContentData } from "Types/DashboardType";
import { useState } from "react";
import { Input } from "reactstrap";
import { Add } from "utils/Constant";

const ProductContent = ({ data }: productContentData) => {
  const [productQuantity, setProductQuantity] = useState(0);
  const [ShowBtn, setShowBtn] = useState(false);
  const handlePlus = () => {
    if (productQuantity === 0) {
      setShowBtn(true);
      setProductQuantity(productQuantity + 1);
    }
    if (productQuantity >= 1) {
      setProductQuantity(productQuantity + 1);
    }
  };
  const handleMinus = () => {
    if (productQuantity === 1) {
      setShowBtn(false);
      setProductQuantity(0);
    }
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };
  return (
    <div className="our-product-content">
      <h6 className="f-14 f-w-500 pt-2 pb-1">{data.productName}</h6>
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="txt-primary">${data.productPrice}.00</h6>
        <div className="add-quantity btn border text-gray f-12 f-w-500">
          <i className={`fa fa-minus remove-minus count-decrease ${ShowBtn ? "d-block" : "d-none"} `} onClick={handleMinus}/>
          <span onClick={() => { setShowBtn(true); setProductQuantity(productQuantity + 1);}} className={`add-btn ${!ShowBtn ? "d-block" : "d-none"}`}>
            {Add}
          </span>
          <Input
            className={`countdown-remove ${ShowBtn ? "d-block" : "d-none"}`}
            type="number"
            value={productQuantity}
            onChange={(e) => setProductQuantity(Number(e.target.value))}
          />
          <i className="fa fa-plus count-increase" onClick={handlePlus} />
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
