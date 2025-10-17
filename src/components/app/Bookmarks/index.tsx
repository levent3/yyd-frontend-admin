import { Card, Col, Container, Row } from "reactstrap";
import BookmarksTabs from "./BookmarksTabs";
import SideBar from "./SideBar";

const BookmarksContainer = () => {
  return (
    <Container fluid={true}>
      <div className="email-wrap bookmark-wrap">
        <Row>
          <SideBar />
          <Col xl={9} md={12} className="box-col-12 xl-70">
            <div className="email-right-aside bookmark-tabcontent">
              <Card className="email-body radius-left">
                <div className="ps-0">
                  <BookmarksTabs />
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default BookmarksContainer;
