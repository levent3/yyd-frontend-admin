import CardHead from 'CommonElements/CardHead'
import { PillsData } from 'Data/Ui-kits/TagPillsData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { PillsVariations } from 'utils/Constant'

const PillsContextual = () => {
    const submenuObj = [
        {
            text: 'Use the',
            code: '.rounded-pill'
        },
        {
            text: ' utility class to make badges more rounded with a larger ',
            code: 'border-radius'
        },
        {
            text: '.'
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title={PillsVariations} subTitle={submenuObj} />
                <CardBody>
                    <div className='badge-spacing'>
                        {
                            PillsData && PillsData.map((item, index) => (
                                <span className={`badge rounded-pill ${item.class}`} key={index}>{item.text}</span>
                            ))
                        }
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}

export default PillsContextual