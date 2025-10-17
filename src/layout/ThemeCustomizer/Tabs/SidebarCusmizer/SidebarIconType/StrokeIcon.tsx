import React from 'react'
import CommonUL from '../CommonUL'

type varType = {
    handleSideBarIconType: (data: string) => void;
    sideBarIconType: string
}

const StrokeIcon = ({ handleSideBarIconType, sideBarIconType }: varType) => {
    return (
        <li data-attr='stroke-svg'
            className={`normal-sidebar border-0 ${sideBarIconType === 'stroke-svg' ? 'active' : ''}`}
            onClick={(e) => handleSideBarIconType('stroke-svg')}>
            <div className='header bg-light'>
                <CommonUL />
            </div>
            <div className='body'>
                <div className='body bg-light'>
                    <span className='badge badge-primary'>Stroke</span>
                </div>
            </div>
        </li >
    )
}

export default StrokeIcon