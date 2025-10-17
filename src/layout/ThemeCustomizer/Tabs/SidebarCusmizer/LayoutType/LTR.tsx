import React from 'react'
import CommonUL from '../CommonUL'

type LtrDataType = {
    handleLayout: (item: string) => void,
    layout_type: string

}

const LTR = ({ handleLayout, layout_type }: LtrDataType) => {
    return (
        <li className={`${layout_type === 'ltr' ? 'active' : ''} border-0`} data-attr='ltr' onClick={() => { handleLayout('ltr') }}>
            <div className='header bg-light'>
                <CommonUL />
            </div>
            <div className='body'>
                <ul>
                    <li className='bg-light sidebar'></li>
                    <li className='bg-light body'>
                        <span className='badge badge-primary'>LTR</span>
                    </li>
                </ul>
            </div>
        </li>
    )
}

export default LTR