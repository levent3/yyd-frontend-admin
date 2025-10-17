import React from 'react'
import { Card, CardHeader } from 'reactstrap'
import DailyFilterNav from './DailyFilterNav'
import { MarketGraphTitle } from 'utils/Constant'
import GraphDetail from './GraphDetail'

const Marketgraph = () => {
    return (
        <Card className='market-card'>
            <CardHeader className='card-no-border'>
                <div className='header-top'>
                    <h5>{MarketGraphTitle}</h5>
                    <DailyFilterNav />
                </div>
            </CardHeader>
            <GraphDetail />
        </Card>
    )
}

export default Marketgraph