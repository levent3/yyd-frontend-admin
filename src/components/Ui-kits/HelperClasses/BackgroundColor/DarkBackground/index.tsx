import { DarkBackgroundData } from 'Data/Ui-kits/HelperClassData'
import React from 'react'
import { Col } from 'reactstrap'
import { Dark_Background } from 'utils/Constant'

const DarkBackground = () => {
    return (
        <Col xl={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <h6 className="mb-3">{Dark_Background}</h6>
                {
                    DarkBackgroundData && DarkBackgroundData.map((item, index) => (
                        <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                            <div className={`helper-box ${item.class}`} /><span>{item.text}</span>
                        </div>
                    ))
                }
            </div>
        </Col>
    )
}

export default DarkBackground