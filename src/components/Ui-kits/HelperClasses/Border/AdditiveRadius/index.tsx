import { AdditiveRadiusData } from 'Data/Ui-kits/HelperClassData'
import React from 'react'
import { Col } from 'reactstrap'
import { Additive_Radius } from 'utils/Constant'

const AdditiveRadius = () => {
    return (
        <Col xl={4} sm={12}>
            <div className='border-wrapper h-100 border'>
                <h6 className="mb-3">{Additive_Radius}</h6>
                {
                    AdditiveRadiusData && AdditiveRadiusData.map((item, index) => (
                        <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                            <div className={`helper-radius radius-wrapper ${item.class}`} /><span>{item.text}</span>
                        </div>
                    ))
                }
            </div>
        </Col>
    )
}

export default AdditiveRadius