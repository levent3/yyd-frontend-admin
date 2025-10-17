import { Container, Row } from "reactstrap";
import IndiaMap from "./IndiaMap";
import USAMap from "./USAMap";
import WorldMap from "./WorldMap";
import AustraliaMap from "./Australia";

const LeafletMapContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <WorldMap />
        <USAMap />
        <IndiaMap />
        <AustraliaMap />
      </Row>
    </Container>
  );
};

export default LeafletMapContainer;
