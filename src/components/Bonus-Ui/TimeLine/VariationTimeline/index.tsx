import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Variation1 from './Variation1'
import Variation2 from './Variation2'
import Variation3 from './Variation3'

const VariationTimeline = () => {
    const subMenu = [
        {
            text: 'Use the ',
            code: '.activity-dot-primary '
        },
        {
            text: 'through rounded animations.'
        }
    ]
    return (
        <Col xl={5} xxl={4} className='notification box-col-12'>
            <Card>
                <CardHead title='Variation Timeline ' subTitle={subMenu} />
                <CardBody className='dark-timeline'>
                    <ul>
                        <Variation1 />
                        <Variation2 />
                        <Variation3 />
                    </ul>
                </CardBody>
            </Card>
        </Col>
    )
}

export default VariationTimeline