import React from 'react'
import CommonUL from '../CommonUL'

type propsType = {
    handleCustomizerMix_Background: (item: string) => void,
    mixLayout: string
}

const BgLight = ({ handleCustomizerMix_Background, mixLayout }: propsType) => {
    return (
        <li className={`color-layout border-0 ${mixLayout === 'light-only' ? 'active' : ''}`}
            data-attr='light-only'
            onClick={() => handleCustomizerMix_Background('light-only')}>
            <div className='header bg-light'>
                <CommonUL />
            </div>
            <div className='body'>
                <ul>
                    <li className='bg-light sidebar' ></li>
                    <li className='bg-light body' > </li>
                </ul>
            </div >
        </li >
    )
}

export default BgLight