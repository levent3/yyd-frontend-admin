import CardHead from 'CommonElements/CardHead'
import { TooltipPosition } from 'Data/Ui-kits/TooltipData'
import React, { Fragment, useState } from 'react'
import { Button, Card, CardBody, Col, Tooltip } from 'reactstrap'

const TooltipDirection = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [setId, setSetId] = useState<string>('');
    const toggle = () => { setOpen(!open) }
    const submenuObj = [
        {
            text: 'Use the ',
            code: 'btn- *'
        },
        {
            text: ' to change dark background color and',
            code: " data-bs-placement='*'"
        },
        {
            text: "[top/right/bottom/left] to tooltip direction change."
        }
    ]
    return (
        <Col md={6}>
            <Card>
                <CardHead title='Tooltip Directions' subTitle={submenuObj} />
                <CardBody>
                    <div className='common-flex'>
                        {
                            TooltipPosition && TooltipPosition.map((item, index) => (
                                <Fragment key={index}>
                                    <Button color={item.class} className="mb-0 me-0" id={item.class + 1} onMouseOver={() => { setSetId(item.class) }} >{item.text}</Button>
                                    <Tooltip isOpen={(open === true && setId === item.class) && true} placement={item.position} target={item.class + 1} toggle={toggle}>{item.tooltip}</Tooltip>
                                </Fragment>
                            ))
                        }
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default TooltipDirection