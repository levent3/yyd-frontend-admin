import { developmentCategoriesDatas } from "Data/Learning";
import { Badge } from "reactstrap";
import { Development, Href } from "utils/Constant";

const DevelopmentCategories = () => {
  return (
    <div className="categories pt-0 pb-0">
      <div className="learning-header">
        <span className="f-w-600">{Development}</span>
      </div>
      <ul>
        {developmentCategoriesDatas.map((data, index) => (
          <li key={index}>
            <a href={Href}>{data.DevelopmentHeading}</a>
            <Badge color="primary" className="pull-right">{data.badgeNumber}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevelopmentCategories;
