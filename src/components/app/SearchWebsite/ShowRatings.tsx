import { showRatingProps } from "Types/SearchWebSite";


const ShowRatings = ({ item }: showRatingProps) => {
  return (
    <li>
      {item.map((data, index) =>
        data === true ? (
          <i className="icofont icofont-ui-rating" key={index} />
        ) : (
          <i className="icofont icofont-ui-rate-blank" key={index}/>
        )
      )}
    </li>
  );
};

export default ShowRatings;
