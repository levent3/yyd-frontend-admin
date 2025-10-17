import CardHead from 'CommonElements/CardHead'
import { HtmlTooltipData } from 'Data/Ui-kits/TooltipData'
import React, { Fragment, useState } from 'react'
import { Button, Card, CardBody, Col, Tooltip } from 'reactstrap'

const HtmlTooltip = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [setId, setSetId] = useState<string>('');
    const toggle = () => { setOpen(!open) }
    const submenuObj = [
        {
            text: 'Use the ',
            code: 'bg-*-light'
        },
        {
            text: ' to change light background color and ',
            code: "data-bs-title "
        },
        {
            text: " to the content under the HTML tag."
        }
    ]
    return (
        <Col md={6}>
            <Card>
                <CardHead title='HTML Elements With Hover Effect' subTitle={submenuObj} />
                <CardBody>
                    <div className='common-flex'>
                        {
                            HtmlTooltipData && HtmlTooltipData.map((item, index) => (
                                <Fragment key={index}>
                                    <Button color={item.class} className="mb-0 me-0" id={item.class + 1} onMouseOver={() => { setSetId(item.class) }} >{item.text}</Button>
                                    <Tooltip isOpen={(open === true && setId === item.class) && true} target={item.class + 1} toggle={toggle}>{item.tooltip}</Tooltip>
                                </Fragment>
                            ))
                        }
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default HtmlTooltip