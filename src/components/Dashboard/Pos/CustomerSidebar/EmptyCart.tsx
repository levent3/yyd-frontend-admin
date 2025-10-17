import Image from "next/image";
import { CardBody } from "reactstrap";
import { EmptyCartDetails, ImgPath } from "utils/Constant";

const EmptyCart = () => {
  return (
    <CardBody className="p-0 empty-card trash-items show">
      <div className="empty-cart-wrapper">
        <div className="empty-cart-content">
          <Image width={96.2} height={96.2} src={`${ImgPath}/dashboard-8/order-trash.gif`} alt="order-trash"/>
        </div>
        <h6 className="text-gray">{EmptyCartDetails}</h6>
      </div>
    </CardBody>
  );
};

export default EmptyCart;
