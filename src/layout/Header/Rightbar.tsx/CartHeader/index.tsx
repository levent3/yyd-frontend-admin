import React from "react";
import { Cart, Checkout, Gotoyourcart, Href, OrderTotal } from "utils/Constant";
import CartItem1 from "./CartItem1";
import Cartitem2 from "./Cartitem2";
import Link from "next/link";
import SvgIcon from "CommonElements/Icons/SvgIcon";

const CartHeader = () => {
  return (
    <li className="cart-nav onhover-dropdown">
      <div className="cart-box">
        <SvgIcon iconId="stroke-ecommerce" />
        <span className="badge rounded-pill badge-success">2</span>
      </div>
      <div className="cart-dropdown onhover-show-div">
        <h6 className="f-18 mb-0 dropdown-title">{Cart}</h6>
        <ul>
          <CartItem1 />
          <Cartitem2 />
          <li className="total">
            <h6 className="mb-0">
              {OrderTotal}
              <span className="f-right">$1000.00</span>
            </h6>
          </li>
          <li className="text-center">
            <Link
              className="d-block mb-3 view-cart f-w-700"
              href={`/dashboard`}
            >
              {Gotoyourcart}
            </Link>
            <Link
              className="btn btn-primary view-checkout"
              href={`/dashboard`}
            >
              {Checkout}
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default CartHeader;
