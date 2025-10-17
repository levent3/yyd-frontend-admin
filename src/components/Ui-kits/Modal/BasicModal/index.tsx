import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import SimpleModal from './SimpleModal'
import ScrollingModal from './ScrollingModal'
import TooltipModal from './TooltipModal'
import CubaModal from './CubaModal'

const BasicModal = () => {
    const submenuObj = [
        {
            text: "Different types of basic modals using like ",
            code: 'simple/scrolling/tooltips/grid/varying modal'
        },
        {
            text: '.'
        }
    ]
    return (
        <Col lg={6}>
            <Card>
                <CardHead title='Basic Modal' subTitle={submenuObj} />
                <CardBody className='badge-spacing'>
                    <SimpleModal />
                    <ScrollingModal />
                    <TooltipModal />
                    <CubaModal />
                </CardBody>
            </Card>
        </Col>
    )
}

export default BasicModal