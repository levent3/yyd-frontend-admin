import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { MyCurrenciesTitle } from 'utils/Constant'
import CurrencyTable from './CurrencyTable'

const MyCurrencies = () => {
    return (
        <Card>
            <CardHeader className='card-no-border'>
                <div className='header-top'>
                    <h5>{MyCurrenciesTitle}</h5>
                </div>
            </CardHeader>
            <CardBody className='pt-0'>
                <div className='recent-table table-responsive currency-table'>
                    <CurrencyTable />
                </div>
            </CardBody>
        </Card>
    )
}

export default MyCurrencies