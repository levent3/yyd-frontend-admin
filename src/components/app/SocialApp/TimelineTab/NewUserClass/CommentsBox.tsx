import Image from "next/image";
import { Button, Input, InputGroup, Media } from "reactstrap";
import { ImgPath } from "utils/Constant";

const CommentsBox = () => {
  return (
    <div className="comments-box">
      <Media>
        <Image
          width={50}
          height={50}
          className="img-50 img-fluid m-r-20 rounded-circle"
          alt="user"
          src={`${ImgPath}/user/1.jpg`}
        />
        <div className="flex-grow-1">
          <InputGroup className="text-box">
            <Input
              className="input-txt-bx"
              type="text"
              name="message-to-send"
              placeholder="Post Your commnets"
            />
            <div className="input-group-append">
              <Button color="transparent">
                <i className="fa fa-smile-o"></i>
              </Button>
            </div>
          </InputGroup>
        </div>
      </Media>
    </div>
  );
};

export default CommentsBox;
