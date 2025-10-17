import DropdownCommon from 'CommonElements/Dashboard/DropdownCommon'
import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { DailyDropdown, EnterCryptoCoins, EnterMoneyConvertedTo, SellCoins } from 'utils/Constant'
import CardForm from '../BuyCard/CardForm'

const SellCard = () => {
    return (
        <Card>
            <CardHeader className='card-no-border'>
                <div className='header-top gap-1'>
                    <h5>{SellCoins}</h5>
                    <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={DailyDropdown} icon iconName='icon-more-alt' btn={{ tag: 'span', color: 'Outline-primary pointer' }} />
                </div>
            </CardHeader>
            <CardBody className='pt-0'>
                <CardForm label1={EnterCryptoCoins} label2={EnterMoneyConvertedTo} buttonText={SellCoins} />
            </CardBody>
        </Card>
    )
}

export default SellCard