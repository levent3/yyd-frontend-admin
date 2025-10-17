import CardHead from 'CommonElements/CardHead'
import CommonPopover from 'CommonElements/Ui-kits/CommonPopover';
import { PopoverPositions } from 'Data/Ui-kits/PopoverData';
import React, { Fragment, useState } from 'react'
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap'
import { Popoverontop, Popoverontoptext } from 'utils/Constant';

const PopoverDirection = () => {
    const [popover, setPopover] = useState(false);
    const Toggle = () => setPopover(!popover);
    const submenuObj = [
        {
            text: 'Use the',
            code: " data-bs-toggle='popover'"
        },
        {
            text: 'through popover directions above buttons. '
        }
    ]
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Popover Direction' subTitle={submenuObj} />
                <CardBody className='common-flex popover-wrapper'>
                    <Button color='warning' className="example-popover mb-0 me-0" id='TopPopover' onClick={() => { Toggle() }}>{Popoverontop}</Button>
                    <Popover placement="top" isOpen={popover} target="TopPopover" toggle={Toggle}>
                        <PopoverHeader>{Popoverontop}</PopoverHeader>
                        <PopoverBody>{Popoverontoptext}</PopoverBody>
                    </Popover>
                    {
                        PopoverPositions && PopoverPositions.map((item, index) => (
                            <Fragment key={index}>
                                <CommonPopover data={item} />
                            </Fragment>
                        ))
                    }
                </CardBody>
            </Card >
        </Col >
    )
}

export default PopoverDirection