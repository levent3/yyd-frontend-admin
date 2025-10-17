import CardHead from 'CommonElements/CardHead'
import { BadgesData } from 'Data/Ui-kits/TagPillsData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { BadgesContextual } from 'utils/Constant'

const Badges = () => {
    const submenuObj = [
        {
            text: 'Use the',
            code: '.badge '
        },
        {
            text: 'utility class to make more badges.'
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title={BadgesContextual} subTitle={submenuObj} />
                <CardBody>
                    <div className='badge-spacing'>
                        {
                            BadgesData && BadgesData.map((item, index) => (
                                <span className={`badge ${item.class}`} key={index}>{item.text}</span>
                            ))
                        }
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}

export default Badges