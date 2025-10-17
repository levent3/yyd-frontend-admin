import CardHead from "CommonElements/CardHead";
import { edgesInputStyleHeaderData } from "Data/Forms/Control";
import { Card,  Col, } from "reactstrap";
import { EdgesInputStyleHeading } from "utils/Constant";
import EdgesInputStyleForm from "./EdgesInputStyleForm";

const EdgesInputStyle = () => {
  return (
    <Col md={6}>
      <Card>
        <CardHead title={EdgesInputStyleHeading} subTitle={edgesInputStyleHeaderData}/>
        <EdgesInputStyleForm />
      </Card>
    </Col>
  );
};

export default EdgesInputStyle;
