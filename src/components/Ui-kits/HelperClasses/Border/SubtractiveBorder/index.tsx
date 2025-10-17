import { SubtractiveData } from 'Data/Ui-kits/HelperClassData'
import React from 'react'
import { Col } from 'reactstrap'
import { Subtractive_Border } from 'utils/Constant'

const SubtractiveBorder = () => {
    return (
        <Col xl={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <h6 className='mb-3'>{Subtractive_Border}</h6>
                {
                    SubtractiveData && SubtractiveData.map((item, index) => (
                        <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                            <div className={`helper-box bg-light border ${item.class}`} /><span>{item.text}</span>
                        </div>
                    ))
                }
            </div>
        </Col>
    )
}

export default SubtractiveBorder