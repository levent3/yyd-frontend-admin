import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Group1 from './Group1'
import Group2 from './Group2'
import Group3 from './Group3'

const AvatarGroup = () => {
    const submenuObj = [
        {
            text: "You can set the group of avatars like ",
            code: '.img-* (40/50/60/80/100) '
        },
        {
            text: 'and',
            code: ' .b-r-* (8/30/35)'
        },
        {
            text: '.'
        }
    ]
    return (
        <Col xl={6}>
            <Card className='height-equal'>
                <CardHead title='Grouping' subTitle={submenuObj} />
                <CardBody className='avatar-showcase'>
                    <div className="avatars">
                        <Group1 />
                        <Group2 />
                        <Group3 />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default AvatarGroup