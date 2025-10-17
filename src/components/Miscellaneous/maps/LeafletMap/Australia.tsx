import { Card, CardBody, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import { AustraliaMapText, LeafletAustraliaMap } from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const AustraliaMap = () => {
 const AUSTRALIA_POSITION = { lat: -25.2744, lng: 130.7751 };

  return (
    <Col sm={6}>
      <Card>
        <CommonCardHeading Heading={LeafletAustraliaMap} span={AustraliaMapText}/>
        <CardBody>
          <MapContainer className="jvector-map-height z-0" style={{ height: 389 }} zoom={4} center={AUSTRALIA_POSITION} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={false} dragging={true}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default AustraliaMap;
