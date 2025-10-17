import SvgIcon from 'CommonElements/Icons/SvgIcon'
import React from 'react'

type propsType = {
    icon: string;
    title: string;
    shortName: string
}

const Currencytitle = ({ icon, title, shortName }: propsType) => {
    return (
        <div className='d-flex'>
            <div className='currency-icon-widget'>
                <SvgIcon iconId={icon} />
            </div>
            <div>
                <h6>
                    {title} <span className='f-light'>{shortName}</span>
                </h6>
            </div>
        </div>
    )
}

export default Currencytitle