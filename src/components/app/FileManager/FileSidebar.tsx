import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Progress } from 'reactstrap';
import { FileFilter, Storage } from 'utils/Constant';
import { FaDatabase } from 'react-icons/fa';
import { sideButtons } from 'Data/FileManager';
import PricingPlans from './PricingPlans';

const FileSideBar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const OnHandelClick = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <>
      <Col xl={3} className='box-col-30 pe-0'>
        <div className='md-sidebar'>
          <Button color='primary' className='md-sidebar-toggle' onClick={OnHandelClick}>
            {FileFilter}
          </Button>
          <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${IsOpen ? 'open' : ''}`}>
            <div className='file-sidebar'>
              <Card>
                <CardBody>
                  <ul >
                    {sideButtons.map((item, index) => (
                      <li key={index} className='border-0'>
                        <div className={item.className}>{item.icon}{item.title}</div>
                      </li>
                    )
                    )}
                  </ul>
                  <hr style={{ opacity: 0.25 }} />
                  <ul>
                    <li>
                      <div className='btn-outline-primary btn'><FaDatabase />{Storage}</div>
                      <div className='m-t-15'>
                        <Progress color='primary' style={{ height: '5px' }} value={55} className='sm-progress-bar mb-1' />
                        <p>{'25 GB of 100 GB used'}</p>
                      </div>
                    </li>
                  </ul>
                  <hr style={{ opacity: 0.25 }} />
                  <PricingPlans />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};
export default FileSideBar;
