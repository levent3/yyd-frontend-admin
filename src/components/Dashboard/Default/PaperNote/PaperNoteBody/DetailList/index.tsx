import React from 'react'
import { Budget } from 'utils/Constant'

const DetailList = () => {
    return (
        <div className='d-flex align-items-center'>
            <h5 className='mb-0 font-primary f-18 me-1'>$239,098</h5>
            <span className='f-light f-w-500'>{Budget}</span>
        </div>
    )
}

export default DetailList