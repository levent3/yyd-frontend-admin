import Image from "next/image";
import { ImgPath, SuccessfullyCompleted } from "utils/Constant";

const SuccessfullyFormSubmitted = () => {
  return (
    <div className="form-completed">
      <Image
        width={100}
        height={100}
        src={`${ImgPath}/gif/dashboard-8/successful.gif`}
        alt="successful"
      />
      <h6>{SuccessfullyCompleted}</h6>
    </div>
  );
};

export default SuccessfullyFormSubmitted;
