import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom'
import React from 'react'
import { Cash_Back } from 'utils/Constant'

const CashBack = () => {
    return (
        <li>
            <div className="balance-item success">
                <div className="balance-icon-wrap">
                    <div className="balance-icon">
                        <FeatherIconCom iconName='ArrowUpRight' />
                    </div>
                </div>
                <div>
                    <span className="f-12 f-light">{Cash_Back}</span>
                    <h5>19.7K</h5>
                    <span className="badge badge-light-success rounded-pill">+10.67%</span>
                </div>
            </div>
        </li>
    )
}

export default CashBack