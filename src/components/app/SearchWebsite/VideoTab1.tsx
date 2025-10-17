import { searchTabsData } from "Data/SearchTabs";
import { Col, Media } from "reactstrap";
import { AllAbout, Href } from "utils/Constant";


const VideoTab1 = () => {
  return (
    <Col xxl="6">
      <h6 className="mb-2">{AllAbout}</h6>
      {searchTabsData.slice(0, 3).map((item) => (
        <Media className="info-block" key={item.id}>
          <iframe className="me-3" width="200" height="100" src={item.videoLink}></iframe>
          <Media body>
            <a href={Href}>{item.url}</a>
            <h6>{item.title}</h6>
            <p>{item.detail}</p>
            <div className="star-ratings">
              <ul className="search-info">
                <li>{item.star}</li>
                <li>{item.vote}</li>
                <li>{item.news}</li>
              </ul>
            </div>
          </Media>
        </Media>
      ))}
    </Col>
  );
};

export default VideoTab1;
