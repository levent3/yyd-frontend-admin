import { Button } from "reactstrap";
import { Likes, View } from "utils/Constant";

const LikesViewButton = () => {
  return (
    <div className="social-btngroup d-flex">
      <Button color="primary" className="text-center">{Likes}</Button>&nbsp;
      <Button color="light" className="text-center">{View}</Button>
    </div>
  );
};

export default LikesViewButton;
