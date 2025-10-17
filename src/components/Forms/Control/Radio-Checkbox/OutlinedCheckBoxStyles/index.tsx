import CardHead from "CommonElements/CardHead";
import { outLinedCheckBoxStylesHeaderData } from "Data/Forms/Control";
import { Card, Col } from "reactstrap";
import { OutlinedCheckBoxStylesHeading } from "utils/Constant";
import OutLineCheckBoxCardBody from "./OutLineCheckBoxCardBody";

const OutlinedCheckBoxStyles = () => {
  return (
    <Col md={6}>
      <Card>
        <CardHead title={OutlinedCheckBoxStylesHeading} subTitle={outLinedCheckBoxStylesHeaderData}/>
        <OutLineCheckBoxCardBody />
      </Card>
    </Col>
  );
};

export default OutlinedCheckBoxStyles;
