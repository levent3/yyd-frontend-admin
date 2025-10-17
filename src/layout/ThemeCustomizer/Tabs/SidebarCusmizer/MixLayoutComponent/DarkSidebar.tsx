import React from 'react'
import CommonUL from '../CommonUL'

type propsType = {
    handleCustomizerMix_Background: (item: string) => void,
    mixLayout: string
}

const DarkSidebar = ({ handleCustomizerMix_Background, mixLayout }: propsType) => {
    return (
        <li className={`color-layout border-0 ${mixLayout === 'dark-sidebar' ? 'active' : ''}`}
            data-attr='dark-sidebar' onClick={() => handleCustomizerMix_Background('dark-sidebar')}>
            <div className='header bg-light'>
                <CommonUL />
            </div>
            <div className='body'>
                <ul>
                    <li className='bg-dark sidebar'></li>
                    <li className='bg-light body'> </li>
                </ul>
            </div>
        </li>
    )
}

export default DarkSidebar