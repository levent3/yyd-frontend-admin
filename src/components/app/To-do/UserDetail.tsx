import Image from "next/image";
import { ImgPath, MarkJecno, MarkJecnoEmail } from "utils/Constant";

const UserDetail = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="media-size-email">
          <Image
            width={40}
            height={40}
            className="me-3 img-40 rounded-circle"
            src={`${ImgPath}/user/user.png`}
            alt="image"
          />
        </div>
        <div className="flex-grow-1">
          <h6 className="f-w-600">{MarkJecno}</h6>
          <p>{MarkJecnoEmail}</p>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
