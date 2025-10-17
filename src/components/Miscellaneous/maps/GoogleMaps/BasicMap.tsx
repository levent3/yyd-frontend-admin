import { Card, Col, CardBody } from "reactstrap";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import CardHead from "CommonElements/CardHead";
import { BasicDemo } from "utils/Constant";

const BasicContainerStyle = {
  height: "500px",
};

const BasicCenter = {
  lat: -3.745,
  lng: -38.523,
};

const BasicMapComp = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places",
  });
  return (
    <Col lg={6} md={12}>
    <Card>
    <CardHead title={BasicDemo} />
      <CardBody>
        <div className="map-js-height">
          <div id="gmap-simple" className="map-block">
            {isLoaded ? <GoogleMap mapContainerStyle={BasicContainerStyle} center={BasicCenter} zoom={10} /> : "Loading"}
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
  );
};

export default BasicMapComp;
