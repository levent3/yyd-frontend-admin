import React from 'react'
import { Col, Row } from 'reactstrap'
import WidgetsGrid from './WidgetsGrid'
import ValuableCustomer from './ValuableCustomer'
import OrderThisMonth from './OrderThisMonth'
import MonthlyProfits from './MonthlyProfits'
import OrderOverView from './OrderOverView'
import DiscoverCard from './DiscoverCard'
import VisitorsCard from './VisitorsCard'
import RecentOrders from './RecentOrders'

const LeftGrid = () => {
    return (
        <Col xxl={10} md={12} className='box-col-8 grid-ed-12'>
            <Row>
                <WidgetsGrid />
                <Col xxl={3} md={5} sm={6} className='box-col-5'>
                    <ValuableCustomer />
                </Col>
                <Col xxl={4} sm={6} className='box-col-6'>
                    <OrderThisMonth />
                </Col>
                <Col xxl={3} md={6} className='box-col-6'>
                    <MonthlyProfits />
                </Col>
                <Col xxl={9} className='box-col-12'>
                    <OrderOverView />
                </Col>
                <Col xxl={3} xl={4} sm={6} className='box-col-6 wow zoomIn'>
                    <DiscoverCard />
                </Col>
                <Col xxl={4} xl={4} sm={6} className='box-col-6'>
                    <VisitorsCard />
                </Col>
                <Col xxl={5} xl={4} className='box-col-12'>
                    <RecentOrders />
                </Col>
            </Row>
        </Col>
    )
}

export default LeftGrid