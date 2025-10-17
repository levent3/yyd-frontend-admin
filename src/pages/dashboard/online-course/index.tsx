import ActiveLessons from '@/components/Dashboard/OnlineCourse/ActiveLassons'
import ActivityHours from '@/components/Dashboard/OnlineCourse/ActivityHours'
import Calender from '@/components/Dashboard/OnlineCourse/Calender'
import GreetingCard2 from '@/components/Dashboard/OnlineCourse/GreetingCard2'
import GreetingGrid from '@/components/Dashboard/OnlineCourse/GreetingGrid'
import Learningoverview from '@/components/Dashboard/OnlineCourse/LearningOverview'
import MyCourse from '@/components/Dashboard/OnlineCourse/MyCourse'
import TodayProgress from '@/components/Dashboard/OnlineCourse/TodayProgress'
import UpcomingEvents from '@/components/Dashboard/OnlineCourse/UpcomingEvents'
import UpcomingSchedule from '@/components/Dashboard/OnlineCourse/UpcomingSchedule'
import Breadcrumbs from 'CommonElements/Breadcrumbs'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Online_course } from 'utils/Constant'

const OnlineCourse = () => {
    return (
        <div className='page-body'>
            <Breadcrumbs title={Online_course} mainTitle={Online_course} parent='Dashboard' />
            <Container fluid={true}>
                <Row>
                    <GreetingGrid />
                    <Col xxl={2} xl={4} sm={6} className='col-ed-3 box-col-5'>
                        <TodayProgress />
                    </Col>
                    <Col xl={2} className='col-ed-3 d-xxl-block d-sm-none box-col-none'>
                        <GreetingCard2 />
                    </Col>
                    <Col xxl={3} xl={5} sm={6} className='col-ed-5 box-col-5'>
                        <Calender />
                    </Col>
                    <Col xxl={5} xl={7} className='col-ed-7 box-col-7'>
                        <Learningoverview />
                    </Col>
                    <Col xxl={4} xl={7} md={6} className='col-ed-7 box-col-7'>
                        <ActivityHours />
                    </Col>
                    <Col xxl={3} xl={5} md={6} className='col-ed-5 box-col-5'>
                        <UpcomingEvents />
                    </Col>
                    <Col xxl={5} className='col-ed-12 box-col-12'>
                        <MyCourse />
                    </Col>
                    <Col xxl={4} md={7} className='col-ed-6 box-col-7'>
                        <UpcomingSchedule />
                    </Col>
                    <Col xxl={3} md={5} className='col-ed-6 box-col-5'>
                        <ActiveLessons />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OnlineCourse