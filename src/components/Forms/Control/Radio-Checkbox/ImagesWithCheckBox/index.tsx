import CardHead from "CommonElements/CardHead";
import { imagesWithCheckBoxHeaderData } from "Data/Forms/Control";
import { Card, CardBody, Col } from "reactstrap";
import { ImagesWithCheckBoxHeading } from "utils/Constant";
import MainImageCheckBox from "./MainImageCheckBox";

const ImagesWithCheckBox = () => {
  return (
    <Col xs={12}>
      <Card>
        <CardHead title={ImagesWithCheckBoxHeading} subTitle={imagesWithCheckBoxHeaderData}/>
        <CardBody>
          <div className="main-img-checkbox">
            <MainImageCheckBox />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImagesWithCheckBox;
