import  {  useState } from 'react';
import { Card, Col, Collapse,  Button } from 'reactstrap';
import IndustryCheckBox from './IndustryCheckBox';
import { AllIndustries, IndustryHeading } from 'utils/Constant';
import HeaderWithIcon from 'CommonElements/HeaderWithIcon';

const Industry = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
      <Col xl={12}>
        <Card>
          <HeaderWithIcon Heading={IndustryHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Collapse isOpen={isOpen}>
            <IndustryCheckBox/>
            <Button className='btn-block  text-center' color='primary' type='button'>
              {AllIndustries}
            </Button>
          </Collapse>
        </Card>
      </Col>
  );
};

export default Industry;
