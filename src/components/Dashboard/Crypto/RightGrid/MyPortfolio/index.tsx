import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { CryptoDropdown, MyPortfolioTitle } from 'utils/Constant'
import PortfolioList from './PortfolioList'

const MyPortfolio = () => {
    return (
        <Card className='portfolio-card'>
            <CardHeader className='card-no-border'>
                <div className='header-top'>
                    <h5 className='m-0'>{MyPortfolioTitle}</h5>
                    <div className='card-header-right-icon'>
                        <DropdownCommon icon={false} options={CryptoDropdown} btn={{ caret: true, direction: 'end', color: 'Outline-primary pointer' }} />
                    </div>
                </div>
            </CardHeader>
            <CardBody>
                <PortfolioList />
            </CardBody>
        </Card>
    )
}

export default MyPortfolio