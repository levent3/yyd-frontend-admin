import React from 'react'

type propsType = {
    data: {
        title: string
        total: number
        badge: number
        color: string
    }
}

const LightCardbox = ({ data }: propsType) => {
    return (
        <div className='light-card balance-card'>
            <div>
                <span className='f-light'>{data.title}</span>
                <h6 className='mt-1 mb-0' >
                    {data.total}
                    <span className={`badge badge-light-${data.color} rounded-pill ms-1`}>{data.badge}%</span>
                </h6>
            </div>
        </div>
    )
}

export default LightCardbox