import Image from "next/image";
import { ImgPath } from "utils/Constant";

const SubmitBusinessForm = () => {
  return (
    <div className="form-completed">
      <Image
        width={100}
        height={100}
        src={`${ImgPath}/gif/dashboard-8/successful.gif`}
        alt="successful"
      />
      <h6>Successfully Completed </h6>
    </div>
  );
};

export default SubmitBusinessForm;
