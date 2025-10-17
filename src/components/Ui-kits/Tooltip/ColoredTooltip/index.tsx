import CardHead from 'CommonElements/CardHead'
import { ColorTooltipData } from 'Data/Ui-kits/TooltipData'
import React, { Fragment, useState } from 'react'
import { Button, Card, CardBody, Col, Tooltip } from 'reactstrap'

const ColoredTooltip = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [setId, setSetId] = useState<string>('');
    const toggle = () => { setOpen(!open) }
    const submenuObj = [
        {
            text: 'Use the ',
            code: 'btn- *'
        },
        {
            text: ' to change dark background color and ',
            code: "data-bs-placement='*' "
        },
        {
            text: "to tooltip positions change."
        }
    ]
    return (
        <Col md={6}>
            <Card>
                <CardHead title='Colored Tooltip' subTitle={submenuObj} />
                <CardBody>
                    <div className='common-flex'>
                        {
                            ColorTooltipData && ColorTooltipData.map((item, index) => (
                                <Fragment key={index}>
                                    <Button color={item.class} className="mb-0 me-0" id={item.class} onMouseOver={() => { setSetId(item.class) }} >{item.text}</Button>
                                    <Tooltip isOpen={(open === true && setId === item.class) && true} target={item.class} toggle={toggle}>{item.text}</Tooltip>
                                </Fragment>
                            ))
                        }
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ColoredTooltip