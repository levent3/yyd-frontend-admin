import  {  useCallback, useState } from 'react';
import { Row, Col, Card, CardBody, TabContent } from 'reactstrap';
import { Orgenization } from 'utils/Constant';
import NavOrg from './OrganiceTab/NavOrg';
import TabOrg from './OrganiceTab/TabOrg';
import CommonCardHeading from 'CommonElements/CommonCardHeading';

const OrgenizationTab = () => {
  const [orgactiveTab, setOrgActiveTab] = useState('1');
  const callback = useCallback((tab:string) => {
    setOrgActiveTab(tab);
  }, []);

  return (
      <Card className="mb-0">
        <CommonCardHeading Heading={Orgenization} /> 
        <CardBody className="p-0">
          <Row className="list-persons">
            <NavOrg callback={callback} />
            <Col xl="8" md="7" className='xl-50'>
              <TabContent activeTab={orgactiveTab}>
                <TabOrg />
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>
  );
};

export default OrgenizationTab;