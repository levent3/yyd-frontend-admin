import CardHead from 'CommonElements/CardHead'
import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Tooltip } from 'reactstrap'
import { BasicTooltipText, SurpriseText } from 'utils/Constant'
import InlineTooltip from './InlineTooltip'

const BasicTooltip = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => { setOpen(!open) }
    const submenuObj = [
        {
            text: 'Use the ',
            code: 'data-bs-title'
        },
        {
            text: ' to change tooltip title and ',
            code: 'data-bs-toggle'
        },
        {
            text: " to add tooltip attribute."
        }
    ]
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Basic Tooltip' subTitle={submenuObj} />
                <CardBody>
                    <Button color='primary' className="example-popover mb-0 me-0" id='TooltipExample' title="Surprise!!! Thank you for hovering...">{BasicTooltipText}</Button>
                    <Tooltip isOpen={open} target="TooltipExample" toggle={toggle}>{SurpriseText}</Tooltip>
                    <InlineTooltip />
                </CardBody>
            </Card >
        </Col >
    )
}

export default BasicTooltip