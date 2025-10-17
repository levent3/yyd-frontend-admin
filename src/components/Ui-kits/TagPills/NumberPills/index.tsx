import CardHead from 'CommonElements/CardHead'
import { NumberPillsData } from 'Data/Ui-kits/TagPillsData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { NumberofPills } from 'utils/Constant'

const NumberPills = () => {
    const submenuObj = [
        {
            text: 'Use the',
            code: '.rounded-circle'
        },
        {
            text: ' utility class to make badges more rounded with a larger ',
            code: 'border-radius'
        },
        {
            text: '.'
        }
    ]
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CardHead title={NumberofPills} subTitle={submenuObj} />
                <CardBody>
                    <div className='badge-spacing'>
                        {
                            NumberPillsData && NumberPillsData.map((item, index) => (
                                <span className={`badge rounded-circle badge-p-space ${item.class}`} key={index}>{item.text}</span>
                            ))
                        }
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}

export default NumberPills