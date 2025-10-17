import { YourBalanceTransaction } from 'Data/Dashboard/CryptoData'
import React from 'react'
import { ArrowDownRight, ArrowUpRight } from 'react-feather'

const YourBalanceList = () => {
    return (
        <ul>
            {YourBalanceTransaction.map((item, i) => (
                <li key={i}>
                    <div className={`balance-item ${item.color}`}>
                        <div className='balance-icon-wrap'>
                            <div className='balance-icon'>
                                {item.color === 'danger' ? <ArrowDownRight /> : <ArrowUpRight />}
                            </div>
                        </div>
                        <div>
                            <span className='f-12 f-light'>{item.title}</span>
                            <h5>{item.price}</h5>
                            <span className={`badge badge-light-${item.color} rounded-pill`}>{item.badge}</span>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default YourBalanceList