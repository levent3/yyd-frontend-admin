import SvgIcon from 'CommonElements/Icons/SvgIcon'
import Link from 'next/link'
import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { ImgPath, YourBalance } from 'utils/Constant'
import YourBalanceList from './YourBalanceList'

const YourBalanceCard = ({ mainClass }: { mainClass?: string }) => {
    return (
        <Card className={`balance-box ${mainClass ? mainClass : ''}`}>
            <CardBody>
                <div className='balance-profile'>
                    <div className='balance-img'>
                        <img src={`${ImgPath}/dashboard-4/user.png`} alt='user vector' />
                        <Link className='edit-icon' href={`/app/users/profile`}>
                            <SvgIcon iconId='pencil' />
                        </Link>
                    </div>
                    <span className='f-light d-block'>{YourBalance}</span>
                    <h5 className='mt-1'>$768,987.90</h5>
                    <YourBalanceList />
                </div>
            </CardBody>
        </Card>
    )
}

export default YourBalanceCard