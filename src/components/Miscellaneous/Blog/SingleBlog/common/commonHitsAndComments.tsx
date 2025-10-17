import { Col } from "reactstrap";
import { Comments, Hits } from "utils/Constant";

const CommonHitsAndComments = () => {
  return (
    <Col md={8}>
      <ul className="comment-social float-start float-md-end simple-list d-block">
        <li className="digits">
          <i className="icofont icofont-thumbs-up" />
          02 {Hits}
        </li>
        <li className="digits">
          <i className="icofont icofont-ui-chat" />
           {Comments}
        </li>
      </ul>
    </Col>
  );
};

export default CommonHitsAndComments;
