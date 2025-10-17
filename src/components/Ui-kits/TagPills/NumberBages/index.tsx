import CardHead from 'CommonElements/CardHead'
import { NumberBadgesData } from 'Data/Ui-kits/TagPillsData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { NumberofBadge } from 'utils/Constant'

const NumberBadges = () => {
    const submenuObj = [
        {
            text: 'Use the',
            code: '.badge'
        },
        {
            text: ' utility class to make number of more badges.'
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title={NumberofBadge} subTitle={submenuObj} />
                <CardBody>
                    <div className='badge-spacing'>
                        {
                            NumberBadgesData && NumberBadgesData.map((item, index) => (
                                <a className={`badge ${item.class}`} href="#" key={index}>{item.text}</a>
                            ))
                        }
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}

export default NumberBadges