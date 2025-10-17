import Image from "next/image";
import {Href, ImgPath,OrderConfirmed,OrderConfirmedDetails,OrderID,} from "utils/Constant";

const SubmitShippingForm = () => {
  return (
    <>
      <div className="order-confirm">
        <Image
          width={126.5}
          height={126.5}
          src={`${ImgPath}/gif/dashboard-8/successful.gif`}
          alt="popper"
        />
        <h5>{OrderConfirmed}</h5>
        <p className="mb-0">{OrderConfirmedDetails}</p>
        <p className="text-center f-w-500 mt-2">
          {OrderID}:
          <a className="text-decoration-underline" href={Href}>
            GE34598
          </a>
        </p>
      </div>
    </>
  );
};

export default SubmitShippingForm;
