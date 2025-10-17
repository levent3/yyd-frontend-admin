import React from 'react'
import CommonUL from '../CommonUL'

type RtlDataType = {
    handleLayout: (item: string) => void;
    layout_type: string
}

const RTL = ({ handleLayout, layout_type }: RtlDataType) => {
    return (
        <li className={`${layout_type === 'rtl' ? 'active' : ''}`} onClick={() => handleLayout('rtl')}>
            <div className='header bg-light'>
                <CommonUL />
            </div>
            <div className='body'>
                <ul>
                    <li className='bg-light body'>
                        <span className='badge badge-primary'>RTL</span>
                    </li>
                    <li className='bg-light sidebar'></li>
                </ul>
            </div>
        </li >
    )
}

export default RTL