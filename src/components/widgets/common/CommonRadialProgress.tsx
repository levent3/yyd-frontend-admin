import React from 'react';
import { ArrowDown, ArrowUp } from 'react-feather';
import { Card, CardBody } from 'reactstrap';
import RadialProgressChart from './RadialProgressChart';
import { CommonRadialProgressPropsType } from 'Types/GeneralWidget';

const CommonRadialProgress = ({ data }: CommonRadialProgressPropsType) => {
  return (
    <Card className='widget-hover height-equal'>
      <CardBody className='radial-progress-card'>
        <div>
          <h6 className='mb-0' >{data.title}</h6>
          <div className='sale-details'>
            <h5 className={`font-${data.color} mb-0`} >{data.average}</h5>
            <span className='f-12 f-light f-w-500'>
              {data.gros >= 1.5 ? <ArrowUp /> : <ArrowDown />}
              {data.gros >= 1.5 ? '+' : '-'}
              {data.gros}%
            </span>
          </div>
          <p className='f-light' > {data.subTitle}</p>
        </div>
        <div className='radial-chart-wrap'>
          <RadialProgressChart data={data} />
        </div>
      </CardBody>
    </Card>
  );
};

export default CommonRadialProgress;
