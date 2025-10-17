import { paymentMethods } from "Data/Dashboard/Pos";
import Image from "next/image";
import { ImgPath, PaymentMethod } from "utils/Constant";

const PaymentMethods = () => {
  return (
    <>
      <h5 className="m-0 p-t-40">{PaymentMethod}</h5>
      <div className="payment-methods">
        {paymentMethods.map((data, index) => (
          <div key={index}>
            <div className="bg-payment widget-hover">
              <Image width={34} height={34} src={`${ImgPath}/dashboard-8/payment-option/${data.imageName}`} alt="cash"/>
            </div>
            <span className="f-w-500 text-gray">{data.header}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default PaymentMethods;
