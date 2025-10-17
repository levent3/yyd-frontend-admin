import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { BuyCoins, DailyDropdown, EnterCoinsConverTedTo, EnterYourMoney } from 'utils/Constant'
import CardForm from './CardForm'

const BuyCard = () => {
    return (
        <Card>
            <CardHeader className='card-no-border'>
                <div className='header-top gap-1'>
                    <h5>{BuyCoins}</h5>
                    <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={DailyDropdown} icon iconName='icon-more-alt' btn={{ tag: 'span' }} />
                </div>
            </CardHeader>
            <CardBody className='pt-0'>
                <CardForm label1={EnterYourMoney} label2={EnterCoinsConverTedTo} buttonText={BuyCoins} />
            </CardBody>
        </Card>
    )
}

export default BuyCard