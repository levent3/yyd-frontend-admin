import  { useState } from 'react';  
import { Button, Card,  Col,  Collapse } from 'reactstrap';
import SkillCheckBox from './SkillCheckBox';
import HeaderWithIcon from 'CommonElements/HeaderWithIcon';
import { AllSkills, SpecificSkills } from 'utils/Constant';

const SkillClass = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
      <Col xl={12}>
        <Card>
          <HeaderWithIcon Heading={SpecificSkills} isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Collapse isOpen={isOpen}>
            <SkillCheckBox/>            
            <Button className='btn-block text-center' color='primary' type='button'>{AllSkills}</Button>
          </Collapse>
        </Card>
      </Col>
  );
};

export default SkillClass;
