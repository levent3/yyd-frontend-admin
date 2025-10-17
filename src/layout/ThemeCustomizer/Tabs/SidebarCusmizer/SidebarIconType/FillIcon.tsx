import React from 'react'
import CommonUL from '../CommonUL'

type varTypes = {
    handleSideBarIconType: (data: string) => void,
    sideBarIconType: string
}

const FillIcon = ({ handleSideBarIconType, sideBarIconType }: varTypes) => {
    return (
        <li data-attr='fill-svg'
            className={`border-0 ${sideBarIconType === 'fill-svg' ? 'active' : ''}`}
            onClick={(e) => handleSideBarIconType('fill-svg')}>
            <div className='header bg-light'>
                <CommonUL />
            </div>
            <div className='body'>
                <div className='body bg-light'>
                    <span className='badge badge-primary'>Fill</span>
                </div>
            </div>
        </li >
    )
}

export default FillIcon
