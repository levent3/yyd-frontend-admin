import { Card, Col, Container, Row } from "reactstrap";
import FileSideBar from "./FileSidebar";
import FileContent from "./FileContent";

const FileManagerContainer = () => {
  return (
    <Container fluid>
      <Row>
        <FileSideBar />
        <Col xl={9} md={12} className="box-col-12">
          <div className="file-content">
            <Card>
              <FileContent />
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FileManagerContainer;
