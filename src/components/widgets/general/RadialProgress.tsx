import { RadialProgressWidgetDataWidgetPage } from "Data/widgets/general";
import { Col } from "reactstrap";
import CommonRadialProgress from "../common/CommonRadialProgress";

const RadialProgress = () => {
  return (
    <>
      {RadialProgressWidgetDataWidgetPage.map((item, index) => (
        <Col xxl={3} sm={6} key={index}>
          <CommonRadialProgress data={item} />
        </Col>
      ))}
    </>
  );
};

export default RadialProgress;
