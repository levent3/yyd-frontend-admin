import { cardType } from "Types/UserType";
import { Followers, Following, Posts } from "utils/Constant";


const UserCardsFooter = ({ item }: cardType) => {
  return (
      <ul className="social-follow">
        <li><h5 className="mb-0">{item.follower}</h5><span className="f-light">{Posts}</span></li>
        <li><h5 className="mb-0">{item.following}k</h5><span className="f-light">{Followers}</span></li>
        <li><h5 className="mb-0">{item.totalPost}</h5><span className="f-light">{Following}</span>
        </li>
      </ul>
  );
};

export default UserCardsFooter;
