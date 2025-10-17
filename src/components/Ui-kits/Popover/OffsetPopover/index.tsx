import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import OffsetRight from './OffsetRight';
import OffsetLeft from './OffsetLeft';

const OffsetPopover = () => {
    const submenuObj = [
        {
            text: 'Use the',
            code: ' data-bs-offset="*,*"'
        },
        {
            text: ' through popover offset above buttons. '
        }
    ]
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Popover Offset' subTitle={submenuObj} />
                <CardBody className='common-flex popover-wrapper'>
                    <OffsetRight />
                    <OffsetLeft />
                </CardBody>
            </Card >
        </Col >
    )
}

export default OffsetPopover