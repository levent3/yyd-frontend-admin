import Breadcrumbs from 'CommonElements/Breadcrumbs'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Dashboard, ECommerceDashboard, E_Commerce } from 'utils/Constant'
import LeftGrid from '@/components/Dashboard/E-Commerce/LeftGrid'
import RightGrid from '@/components/Dashboard/E-Commerce/RightGrid'

const Ecommerce = () => {
    return (
        <div className='page-body'>
            <Breadcrumbs title={E_Commerce} mainTitle={ECommerceDashboard} parent={Dashboard} />
            <Container fluid={true}>
                <Row className='size-column'>
                    <LeftGrid />
                    <RightGrid />
                </Row>
            </Container>
        </div>
    )
}

export default Ecommerce