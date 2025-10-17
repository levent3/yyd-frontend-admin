import CardHead from 'CommonElements/CardHead'
import { blockQuotesData } from 'Data/Ui-kits/TypographyData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const Blockquotes = () => {
    const submenuObj = [
        {
            text: "The ",
            code: '<blockquote>'
        },
        {
            text: ' tag specifies a section that is quoted from another source.'
        }
    ]
    return (
        <Col sm={12}>
            < Card className='overflow-hidden' >
                <CardHead title='Blockquotes' subTitle={submenuObj} />
                <CardBody>
                    {
                        blockQuotesData && blockQuotesData.map((item, index) => (
                            <div key={index} className={item.class}>
                                <blockquote className="blockquote light-card mb-2">
                                    <p className="mb-0 txt-dark">{item.text}</p>
                                    <figcaption className="blockquote-footer pt-3">{item.footer}</figcaption>
                                </blockquote>
                            </div>
                        ))
                    }
                </CardBody>
            </Card >
        </Col >
    )
}

export default Blockquotes