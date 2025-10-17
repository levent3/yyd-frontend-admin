import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DropdownInput from './DropdownInput';

const DropdownwithInput = () => {
    const submenuObj = [
        {
            text: 'Use the checkbox using dropdown.',
            code: "(type='checkbox'/'radio')."
        }
    ]
    return (
        <Col xl={4} sm={6}>
            <Card className='height-equal'>
                <CardHead title='With Input Type' subTitle={submenuObj} />
                <CardBody>
                    <div className='common-flex'>
                        <div className='btn-group'>
                            <DropdownInput />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DropdownwithInput