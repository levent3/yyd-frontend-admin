import SvgIcon from "CommonElements/Icons/SvgIcon";
import { salesReportData } from "Data/widgets/general";
import { Card, CardBody, Col } from "reactstrap";

const SalesReport = () => {
  return (
    <>
      {salesReportData.map((data, i) => (
        <Col key={i} sm={6} xl={3} lg={6} className="box-col-6">
          <Card className="widget-1">
            <CardBody>
              <div className="widget-content">
                <div className={`widget-round ${data.color}`}>
                  <div className="bg-round">
                    <SvgIcon className="svg-fill" iconId={`${data.icon}`} />
                    <SvgIcon className="half-circle svg-fill" iconId="halfcircle"/>
                  </div>
                </div>
                <div>
                  <h4>{data.total}</h4>
                  <span className="f-light">{data.title}</span>
                </div>
              </div>
              <div className={`font-${data.color} f-w-500`}>
                <i className={`icon-arrow-${data.gros < 50 ? "down" : "up"} icon-rotate me-1`}/>
                <span>{`${data.gros < 50 ? "-" : "+"}${data.gros}%`}</span>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default SalesReport;
