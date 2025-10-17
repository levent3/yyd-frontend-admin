import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom'
import React from 'react'
import { Investment_Constant } from 'utils/Constant'

const Investment = () => {
    return (
        <li>
            <div className="balance-item danger">
                <div className="balance-icon-wrap">
                    <div className="balance-icon">
                        <FeatherIconCom iconName='ArrowDownRight' />
                    </div>
                </div>
                <div> <span className="f-12 f-light">{Investment_Constant} </span>
                    <h5>78.8K</h5>
                    <span className="badge badge-light-danger rounded-pill">-11.67%</span>
                </div>
            </div>
        </li>
    )
}

export default Investment