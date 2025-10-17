import { AdditiveBorderData } from 'Data/Ui-kits/HelperClassData'
import React from 'react'
import { Col } from 'reactstrap'
import { Additive_Border } from 'utils/Constant'

const AdditiveBorder = () => {
    return (
        <Col xl={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <h6 className='mb-3'>{Additive_Border}</h6>
                {
                    AdditiveBorderData && AdditiveBorderData.map((item, index) => (
                        <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                            <div className={`helper-box bg-light ${item.class}`} /><span>{item.text}</span>
                        </div>
                    ))
                }
            </div>
        </Col>
    )
}

export default AdditiveBorder