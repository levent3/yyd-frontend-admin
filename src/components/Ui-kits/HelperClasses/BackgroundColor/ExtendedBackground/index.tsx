import React from 'react'
import { Col } from 'reactstrap'
import { Extended_Background, Light_Background, light_card } from 'utils/Constant'

const ExtendedBackground = () => {
    return (
        <Col xl={4} sm={12}>
            <div className='border-wrapper h-100 border'>
                <h6 className="mb-3">{Extended_Background}</h6>
                <div className="d-flex align-items-center mb-2 gap-2">
                    <div className="helper-box light-card" /><span>{light_card}</span>
                </div>
                <div className="d-flex align-items-center mb-2 gap-2">
                    <div className="helper-box light-background border" /><span>{Light_Background}</span>
                </div>
            </div>
        </Col>
    )
}

export default ExtendedBackground