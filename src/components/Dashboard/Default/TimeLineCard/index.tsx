import React from 'react'
import { Card, CardHeader, Col } from 'reactstrap'
import TimeLineChart from './TimeLineChart'
import { DailyDropdown, Timeline } from 'utils/Constant'
import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'

const TimeLineCard = () => {
    return (
        <Col xxl={4} md={6} className='appointment-sec box-col-6'>
            <div className='appointment'>
                <Card>
                    <CardHeader className='card-no-border'>
                        <div className='header-top'>
                            <h5 className='m-0'>{Timeline}</h5>
                            <div className='card-header-right-icon'>
                                <DropdownCommon icon={false} options={DailyDropdown} btn={{ caret: true, color: 'Outline-primary' }} />
                            </div>
                        </div>
                    </CardHeader>
                    <TimeLineChart />
                </Card>
            </div>
        </Col >
    )
}

export default TimeLineCard