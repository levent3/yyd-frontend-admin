import { Mail, MessageCircle } from "react-feather";
import { askQuestionData } from "Data/faq";
import { AskOurCommunity, ContactUs, Href } from "utils/Constant";

const NavigationOption = () => {
  return (
    <div className="navigation-option">
      <ul>
        {askQuestionData.map((item, i) => (
          <li key={i}>
            <a href={Href}>{item.icon}{item.title}</a>
            <span className={item.class}>{item.val}</span>
          </li>
        ))}
      </ul>
      <ul>
        <li><a href={Href}><MessageCircle />{AskOurCommunity}</a></li>
        <li><a href={Href}><Mail />{ContactUs}</a></li>
      </ul>
    </div>
  );
};

export default NavigationOption;
