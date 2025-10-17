import CardHead from 'CommonElements/CardHead'
import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom'
import { RoundedPillData } from 'Data/Ui-kits/TagPillsData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { PillsWithIcons } from 'utils/Constant'

const RoundedPillicon = () => {
    const submenuObj = [
        {
            text: 'Use the',
            code: '.rounded-pill'
        },
        {
            text: ' utility class to make icons badges more rounded with a larger ',
            code: 'border-radius'
        },
        {
            text: '.'
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title={PillsWithIcons} subTitle={submenuObj} />
                <CardBody>
                    <div className='badge-spacing'>
                        {
                            RoundedPillData && RoundedPillData.map((item, index) => (
                                <a className={`badge rounded-circle p-2 ${item.class}`} href="#" key={index}>
                                    <FeatherIconCom iconName={item.iconName} />
                                </a>
                            ))
                        }
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}

export default RoundedPillicon