import CardHead from "CommonElements/CardHead";
import { imagesWithRadioBoxHeaderData } from "Data/Forms/Control";
import { Card, CardBody, Col } from "reactstrap";
import { ImagesWithRadioBoxHeading } from "utils/Constant";
import MainImageRadioBox from "./MainImageRadioBox";

const ImagesWithRadio = () => {
  return (
    <Col xs={12}>
      <Card>
        <CardHead title={ImagesWithRadioBoxHeading} subTitle={imagesWithRadioBoxHeaderData}/>
        <CardBody>
          <div className="main-img-checkbox">
            <MainImageRadioBox />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImagesWithRadio;
