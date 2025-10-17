import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import { CKEditorExample } from "utils/Constant";

const CkEditorContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Card>
            <CommonCardHeading smallHeading={CKEditorExample} />
            <CardBody>
              <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>

  );
};

export default CkEditorContainer;
