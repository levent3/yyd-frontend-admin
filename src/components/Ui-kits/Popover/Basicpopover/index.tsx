import CardHead from 'CommonElements/CardHead'
import CommonPopover from 'CommonElements/Ui-kits/CommonPopover';
import { BasicpopoverData } from 'Data/Ui-kits/PopoverData';
import React, { Fragment, useState } from 'react'
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap'
import { HurryUp } from 'utils/Constant';

const Basicpopover = () => {
    const [popover, setPopover] = useState(false);
    const Toggle = () => setPopover(!popover);
    const submenuObj = [
        {
            text: 'Use the',
            code: " data-bs-toggle='popover'"
        },
        {
            text: 'through popover above buttons. '
        }
    ]
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Basic Popover' subTitle={submenuObj} />
                <CardBody className='common-flex popover-wrapper'>
                    <Button color='primary' className="example-popover mb-0 me-0" type="button" id='Popover1' onClick={() => { Toggle }}>{HurryUp}</Button>
                    <Popover placement="left" isOpen={popover} target="Popover1" toggle={Toggle}>
                        <PopoverHeader>{'Basic Popover'}</PopoverHeader>
                        <PopoverBody>{"If the package restore doesn't help, you can look at the Output window in the Visual Studio."}</PopoverBody>
                    </Popover>
                    {
                        BasicpopoverData && BasicpopoverData.map((item, index) => (
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

export default Basicpopover