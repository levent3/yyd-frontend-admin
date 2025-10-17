import CardHead from 'CommonElements/CardHead'
import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom'
import { BadgeIconData } from 'Data/Ui-kits/TagPillsData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { BadgeIcons } from 'utils/Constant'

const BadgeWithIcon = () => {
    const submenuObj = [
        {
            text: 'Use the',
            code: '.badge '
        },
        {
            text: 'utility class to make more icons.'
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title={BadgeIcons} subTitle={submenuObj} />
                <CardBody>
                    <div className='badge-spacing'>
                        {
                            BadgeIconData && BadgeIconData.map((item, index) => (
                                <a className={`badge ${item.class}`} href="#" key={index}>
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

export default BadgeWithIcon