import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Fullscreen from './Fullscreen'
import ExtraLarge from './ExtraLarge'
import LargeModal from './LargeModal'
import SmallModal from './SmallModal'

const SizeModal = () => {
    const submenuObj = [
        {
            text: "Modals have three optional sizes, available via modifier classes to be placed on a "
        },
        {
            code: '.modal-dialog'
        }
    ]
    return (
        <Col lg={6}>
            <Card>
                <CardHead title='Sizes Modal' subTitle={submenuObj} />
                <CardBody className='badge-spacing'>
                    <Fullscreen />
                    <ExtraLarge />
                    <LargeModal />
                    <SmallModal />
                </CardBody>
            </Card>
        </Col>
    )
}

export default SizeModal