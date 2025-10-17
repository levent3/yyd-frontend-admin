import React from 'react'

type propsType = {
    data: {
        title: string;
        gros: number;
        status: string
    }
}

const LightCard = ({ data }: propsType) => {
    return (
        <div className='light-card balance-card align-items-center'>
            <h6 className='f-w-400 f-14 mb-0'>{data.title}</h6>
            <div className='ms-auto text-end'>
                <span className={`badge badge-light-${data.status} rounded-pill`}>
                    {data.status === 'success' ? '+' : '-'}
                    {data.gros}%
                </span>
            </div>
        </div>
    )
}

export default LightCard