import { Comment } from "utils/Constant";
import UserComment from "./common/UserComment";

const CommentSection = () => {
  return (
    <section className="comment-box">
      <h4>{Comment}</h4>
      <hr />
      <ul>
        <UserComment ImageSrc="comment.jpg" mainDivClassName="align-self-center"/>
        <UserComment ImageSrc="comment.jpg" mainDivClassName="align-self-center" userReplay={true}/>
        <UserComment ImageSrc="4.jpg" />
        <UserComment ImageSrc="12.png" />
        <UserComment ImageSrc="14.png" />
      </ul>
    </section>
  );
};

export default CommentSection;
