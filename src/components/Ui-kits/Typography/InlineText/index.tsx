import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { DeletText, ExtraSmalltext, InerText, Inlinetextelements, ItalicText, MarkText, SmallText, StrongText, UnderlineText, highlight, textd } from 'utils/Constant'

const InlineText = () => {
    const submenuObj = [
        {
            text: "Styling for common inline HTML5 elements."
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title={Inlinetextelements} subTitle={submenuObj} />
                <CardBody>
                    <div className='d-flex flex-column gap-2'>
                        <p className="mb-0">{MarkText}<mark>{highlight}</mark>{textd}</p>
                        <p className="mb-0"><del>{DeletText}</del></p>
                        <p className="mb-0"><s>{SmallText}</s></p>
                        <p className="mb-0"><ins>{InerText}</ins></p>
                        <p className="mb-0"><u>{UnderlineText}</u> </p>
                        <p className="mb-0"><small>{ExtraSmalltext}</small></p>
                        <p className="mb-0"><strong>{StrongText}</strong></p>
                        <p className="mb-0"><em>{ItalicText}</em></p>
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}

export default InlineText