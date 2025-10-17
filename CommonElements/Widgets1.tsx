import React from 'react';
import { Card, CardBody } from 'reactstrap';
import SvgIcon from './Icons/SvgIcon';

type propstype = {
  data: {
    title: string;
    gros: number;
    total: number | string;
    color: string;
    icon: string;
  }
}

const Widgets1 = ({ data }: propstype) => {
  return (
    <Card className='widget-1'>
      <CardBody>
        <div className='widget-content'>
          <div className={`widget-round ${data.color}`}>
            <div className='bg-round'>
              <SvgIcon className='svg-fill' iconId={`${data.icon}`} />
              <SvgIcon className='half-circle svg-fill' iconId='halfcircle' />
            </div>
          </div>
          <div>
            <h4>{data.total}</h4>
            <span className='f-light'>{data.title}</span>
          </div>
        </div>
        <div className={`font-${data.color} f-w-500`}>
          <i className={`icon-arrow-${data.gros < 50 ? 'down' : 'up'} icon-rotate me-1`} />
          <span>{`${data.gros < 50 ? '-' : '+'}${data.gros}%`}</span>
        </div>
      </CardBody>
    </Card>
  );
};

export default Widgets1;
