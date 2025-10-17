import { Media } from "reactstrap";
import { Messages, MyPage, Notification } from "utils/Constant";

const MessagesAndNotification = () => {
  return (
    <Media body>
      <h6 className="font-primary f-w-600">{MyPage}</h6>
      <span className="d-block">
        <span>
          <i className="fa fa-comments-o"> </i>
          <span className="px-2">
            {Messages} <span className="badge rounded-pill badge-light">9</span>
          </span>
        </span>
      </span>
      <span className="d-block">
        <span>
          <i className="fa fa-bell-o"> </i>
          <span className="px-2">
            {Notification} <span className="badge rounded-pill badge-light">9</span>
          </span>
        </span>
      </span>
    </Media>
  );
};

export default MessagesAndNotification;
