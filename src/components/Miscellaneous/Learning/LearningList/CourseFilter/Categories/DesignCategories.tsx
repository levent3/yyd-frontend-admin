import { designCategoriesData } from "Data/Learning";
import { Badge } from "reactstrap";
import { Design, Href } from "utils/Constant";

const DesignCategories = () => {
  return (
    <div className="categories pt-0 pb-2">
      <div className="learning-header">
        <span className="f-w-600">{Design}</span>
      </div>
      <ul>
        {designCategoriesData.map((data, index) => (
          <li key={index}>
            <a href={Href}>{data.learningHeading}</a>
            <Badge color="primary" className="pull-right">
              {data.badgeNumber}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesignCategories;
