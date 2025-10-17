import CardHead from "CommonElements/CardHead";
import { remoteTypeHeadData } from "Data/Forms/Widget";
import { movieList } from "Data/Forms/Widget/TypeAheadData";
import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col } from "reactstrap";
import { RemotetypeAheadHeading } from "utils/Constant";

const RemoteTypeAhead = () => {
  return (
    <Col sm={12} md={6}>
      <Card>
        <CardHead
          title={RemotetypeAheadHeading}
          subTitle={remoteTypeHeadData}
        />
        <CardBody>
          <div id="remote">
            <form className="theme-form main-typeahead">
              <div>
                <Typeahead options={movieList} placeholder="Choose Option" />
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RemoteTypeAhead;
