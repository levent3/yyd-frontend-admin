import { productOrderData } from "Data/Dashboard/Pos";
import Image from "next/image";
import { Category, ImgPath } from "utils/Constant";
import { Href } from "../../../../../utils/Constant/index";
import { useState } from "react";
import EmptyCart from "./EmptyCart";
import { Button, Input } from "reactstrap";

const OrderDetails = () => {
  const [cartData, setcartData] = useState(productOrderData);
  const handleRemoveItem = (item: string) => {
    setcartData(cartData.filter((data) => data.productName !== item));
  };

  const handleQuantityChange = (item: string, newQuantity: number) => {
    if (newQuantity >= 0) {
      const updatedCartData = cartData.map((data) => {
        if (data.productName === item) {
          return { ...data, quantity: newQuantity };
        }
        return data;
      });
      setcartData(updatedCartData);
    }
  };

  return (
    <div className="order-quantity p-b-20 border-bottom">
      {cartData.length > 0 ? (
        cartData.map((data, index) => (
          <div className="order-details-wrapper" key={index}>
            <div className="left-details">
              <div className="order-img widget-hover">
                <Image width={76.5} height={50.53} src={`${ImgPath}/dashboard-8/product-categories/${data.image}`} alt="phone" />
              </div>
            </div>
            <div className="category-details">
              <div className="order-details-right">
                <span className="text-gray mb-1">{Category}<span className="font-dark">{data.productName}</span></span>
                <h6 className="f-14 f-w-500 mb-3">{data.detail}</h6>
                <div className="last-order-detail">
                  <h6 className="txt-primary">${data.amount}</h6>
                  <a href={Href}>
                    <i className="fa fa-trash trash-remove" onClick={() => handleRemoveItem(data.productName)} />
                  </a>  
                </div>
              </div>
              <div className="right-details">
                <div className="touchspin-wrapper">
                  <Button color="" className="decrement-touchspin btn-touchspin" onClick={()=>handleQuantityChange(data.productName,data.quantity-1)} >
                    <i className="fa fa-minus text-gray" />
                  </Button>
                  <Input className="input-touchspin" id="inputData" type="number" value={data.quantity}  />
                  <Button color="" className="increment-touchspin btn-touchspin" onClick={()=>handleQuantityChange(data.productName,data.quantity+1)}>
                    <i className="fa fa-plus text-gray" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default OrderDetails;
