import CardHead from 'CommonElements/CardHead'
import { textColorData } from 'Data/Ui-kits/TypographyData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const TextColor = () => {
    const submenuObj = [
        {
            text: "You can Give text color by using ",
            code: 'text-*'
        },
        {
            text: ' class'
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title='Text Color' subTitle={submenuObj} />
                <CardBody>
                    <div className='d-flex flex-column gap-2'>
                        {
                            textColorData && textColorData.map((item, index) => (
                                <p key={index} className={item.class}>{item.text}<code>{item.code}</code> class</p>
                            ))
                        }
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}

export default TextColor