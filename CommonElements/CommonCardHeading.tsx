import { commonCardHeadingPropsType } from "Types/CommonElementType";
import { CardHeader } from "reactstrap";

const CommonCardHeading = ({headingClassName,smallHeading,Heading,span,span2,bigHeadingClassName}: commonCardHeadingPropsType) => {
  return (
    <CardHeader className={headingClassName?headingClassName:""}>
      {smallHeading ? <h5>{smallHeading}</h5> : <h4 className={bigHeadingClassName?bigHeadingClassName:""}>{Heading}</h4>}
      {span && <span dangerouslySetInnerHTML={{ __html: span }} />}
      {span2 && <span dangerouslySetInnerHTML={{ __html: span2 }} />}
    </CardHeader>
  );
};

export default CommonCardHeading;
