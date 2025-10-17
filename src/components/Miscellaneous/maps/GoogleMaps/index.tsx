import { Container, Row } from 'reactstrap';
import MarkerMapComp from "./MarkerMap";
import PolylinesMapComp from "./Polylines";
import PolygonsComp from "./PolygonsMap";
import BasicMapComp from './BasicMap';

const GoogleMapsContainer = () => {
  return (
    <Container fluid={true}>
        <Row>
          <BasicMapComp />
          <MarkerMapComp />
          <PolygonsComp />
          <PolylinesMapComp />
        </Row>
      </Container>
  );
};

export default GoogleMapsContainer;
