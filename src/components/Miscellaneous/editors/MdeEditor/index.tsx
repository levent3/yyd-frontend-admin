import { Container, Card, CardBody, Col, Row } from "reactstrap";
import { SimpleMdeReact } from "react-simplemde-editor";
import SmallEditor from "./SmallEditor";
import { MdeEditorExample, MdeEditorText } from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const MdeEditorContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Card>
            <CommonCardHeading smallHeading={MdeEditorExample} />
            <CardBody>
              <SimpleMdeReact
                id="editor_container"
                value={MdeEditorText}
                options={{ autofocus: true, spellChecker: false }}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <SmallEditor />
    </Container >
  );
};

export default MdeEditorContainer;
