import { activityLogData } from "Data/SocialApp";

interface propsTypes {
  Heading: string;
}

const MyActivity = ({ Heading }: propsTypes) => {
  return (
    <div className="my-activity">
      <h6 className="f-w-600 mb-3">{Heading}</h6>
      {activityLogData.map((item) => (
        <p key={item.id}>
          <span>{item.icon}</span>
          {item.description}
        </p>
      ))}
    </div>
  );
};

export default MyActivity;
