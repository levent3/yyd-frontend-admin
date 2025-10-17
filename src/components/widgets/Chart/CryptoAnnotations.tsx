import CommonCardHeading from "CommonElements/CommonCardHeading";
import { optionsAnnotation, optionsUserChart } from "Data/widgets/chart";
import Charts from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import { CryptoAnnotationsHeading } from "utils/Constant";

const CryptoAnnotations = () => {
  return (
    <Col xl={6} lg={12} className="xl-50">
      <Card>
        <CommonCardHeading smallHeading={CryptoAnnotationsHeading} />
        <CardBody>
          <div className="chart-container">
            <Row>
              <Col xs={12}>
                <div id="crypto-annotation">
                  <Charts options={optionsAnnotation} series={optionsAnnotation.series} height={400} type="line"/>
                </div>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CryptoAnnotations;
