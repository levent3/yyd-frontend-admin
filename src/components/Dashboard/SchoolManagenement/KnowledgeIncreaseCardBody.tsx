import Image from "next/image";
import { Button, CardBody } from "reactstrap";
import { ImgPath, LearnMore, knowledgeLearningParagraph } from "utils/Constant";

const KnowledgeIncreaseCardBody = () => {
  return (
    <CardBody className="pt-0 position-relative pb-0 pe-0 increase-content">
      <div className="knowledge-wrapper">
        <div>
          <p className="f-light">{knowledgeLearningParagraph}</p>
          <Button color="primary" className="btn-hover-effect f-w-500 knowledge-btn">{LearnMore}</Button>
        </div>
        <div className="knowledgebase-wrapper">
          <Image width={217.5} height={193.16} className="knowledge-img img-fluid w-100" src={`${ImgPath}/dashboard-7/knowledge-base.png`} alt="knowledge-base"/>
        </div>
      </div>
    </CardBody>
  );
};

export default KnowledgeIncreaseCardBody;
