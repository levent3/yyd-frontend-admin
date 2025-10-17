import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import FadeSlide from './FadeSlide'

const CrossFade = () => {
    const subMenu = [
        {
            text: 'Add ',
            code: '.carousel-fade'
        },
        {
            text: ' to your carousel to animate slides with a fade transition instead of a slide. Depending on your carousel content, you may want to add',
            code: ' .bg-body'
        },
        {
            text: ' or some custom CSS to the .carousel-items for proper cross-fading.'
        }
    ]
    return (
        <Col xl={6} xs={12}>
            <Card>
                <CardHead title='Cross-Fade' subTitle={subMenu} />
                <CardBody>
                    <FadeSlide />
                </CardBody>
            </Card>
        </Col>
    )
}

export default CrossFade