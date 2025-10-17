import { Container, Row } from "reactstrap";
import JavascriptMode from "./JavascriptMode";
import HtmlMode from "./HTMLMode";
import CssMode from "./CSSMode";
import JavaMode from "./Java";

const AceCodeEditorContainer = () => {
  return (
    <Container fluid>
      <Row>
        <JavascriptMode />
        <HtmlMode />
        <CssMode />
        <JavaMode />
      </Row>
    </Container>
  );
};

export default AceCodeEditorContainer;
