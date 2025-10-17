import { Card, CardBody, Col } from "reactstrap";
import {GoogleMap,useJsApiLoader,} from "@react-google-maps/api";
import CardHead from "CommonElements/CardHead";
import { Polygons } from "utils/Constant";

const containerStyle = {
  height: "500px",
};
const center = {
  lat: -3.745,
  lng: -38.523,
};

const PolylinesMapComp = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places",
  });

  return (
    <Col lg={6} md={12}>
      <Card>
        <CardHead title={Polygons} />
        <CardBody>
          <div className="map-js-height">
            <div id="gmap-simple" className="map-block">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={10}
                ></GoogleMap>
              ) : (
                "loading"
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PolylinesMapComp;
