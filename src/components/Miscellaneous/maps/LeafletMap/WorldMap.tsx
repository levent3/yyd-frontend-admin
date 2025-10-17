import { Card, CardBody, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import { LeafletWorldMap, worldMapText } from "utils/Constant";

const WorldMap = () => {
 const USA_POSITION = { lat: 50, lng: 10 };

  return (
    <Col sm={6}>
      <Card>
        <CommonCardHeading Heading={LeafletWorldMap} span={worldMapText} />
        <CardBody>
          <MapContainer style={{ height: 389 }} easeLinearity={0.35} attributionControl={true} center={USA_POSITION} zoom={13} scrollWheelZoom={true} className="z-0 jvector-map-height">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default WorldMap;
