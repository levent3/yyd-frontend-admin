import { Card, CardBody, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import { IndiaMapText, LeafletIndiaMap } from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const IndiaMap = () => {
const INDIA_POSITION = { lat: 20.5937, lng: 78.9629 };
  return (
    <Col sm={6}>
      <Card>
        <CommonCardHeading Heading={LeafletIndiaMap} span={IndiaMapText} />
        <CardBody>
          <MapContainer className="jvector-map-height z-0" style={{ height: 389 }} zoom={5} center={INDIA_POSITION} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={false} dragging={true}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default IndiaMap;
