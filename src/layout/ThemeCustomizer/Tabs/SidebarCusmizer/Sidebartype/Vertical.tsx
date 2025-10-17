import React from 'react'
import CommonUL from '../CommonUL';

type propsType = {
    handleSidebarType: (data: string) => void;
    layout?: string
}

const Vertical = ({ handleSidebarType, layout }: propsType) => {
    return (
        <li data-attr='normal-sidebar' className={`border-0 ${layout === 'horizontal-wrapper' ? 'active' : ''}`}
            onClick={(e) => handleSidebarType('horizontal-wrapper')}>
            <div className='header bg-light'>
                <CommonUL />
            </div>
            <div className='body'>
                <ul className='flex-row'>
                    <li className='bg-dark sidebar'></li>
                    <li className='bg-light body'></li>
                </ul>
            </div>
        </li >
    )
}

export default Vertical