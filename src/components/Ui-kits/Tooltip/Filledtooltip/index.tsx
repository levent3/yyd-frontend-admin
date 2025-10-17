import CardHead from 'CommonElements/CardHead'
import { FlippedtooltipData } from 'Data/Ui-kits/TooltipData'
import React, { Fragment, useState } from 'react'
import { Button, Card, CardBody, Col, Tooltip } from 'reactstrap'

const Filledtooltip = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [setId, setSetId] = useState<string>('');
    const toggle = () => { setOpen(!open) }
    const submenuObj = [
        {
            text: 'Tooltip in hover effect through fill dark color.',
            code: '[.btn-outline-*]'
        },
        {
            text: '. and',
            code: "data-bs-title "
        },
        {
            text: "to the content under the HTML Tag."
        }
    ]
    return (
        <Col md={6}>
            <Card>
                <CardHead title='Filled Tooltip' subTitle={submenuObj} />
                <CardBody className='fill-tooltip'>
                    <div className='common-flex'>
                        {
                            FlippedtooltipData && FlippedtooltipData.map((item, index) => (
                                <Fragment key={index}>
                                    <Button color='outline' className={`mb-0 me-0 ${item.class}`} id={item.class} onMouseOver={() => { setSetId(item.class) }} >{item.text}</Button>
                                    <Tooltip isOpen={(open === true && setId === item.class) && true} target={item.class} toggle={toggle}>{item.tooltip}</Tooltip>
                                </Fragment>
                            ))
                        }
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Filledtooltip