import CardHead from 'CommonElements/CardHead'
import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom'
import { BadgeButtonData } from 'Data/Ui-kits/TagPillsData'
import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { BadgesPartButtons } from 'utils/Constant'

const BadgeButton = () => {
    const submenuObj = [
        {
            text: '',
            code: '.badge'
        },
        {
            text: ' can be used as part of ',
            code: '.btn'
        },
        {
            text: ' to provide a icons.'
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title={BadgesPartButtons} subTitle={submenuObj} />
                <CardBody>
                    <div className='badge-spacing flex-column align-items-start'>
                        {
                            BadgeButtonData && BadgeButtonData.map((item, index) => (
                                <Button color={item.class} className='d-flex align-items-center' type="button" key={index}>{item.text}
                                    <span className="badge rounded-circle btn-p-space badge-light text-dark ms-2">
                                        <FeatherIconCom iconName={item.iconName} />
                                    </span>
                                </Button>
                            ))
                        }
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}

export default BadgeButton