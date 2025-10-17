import CardHead from 'CommonElements/CardHead'
import { GridColumnData } from 'Data/Ui-kits/GridData'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const GridColumn = () => {
    const submenuObj = [
        {
            text: 'You may use predefined grid classes. Using ',
            code: '.col-md-*'
        },
        {
            text: 'you can set the grid system.'
        }
    ]
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Grid For Column' subTitle={submenuObj} />
                <CardBody className='grid-showcase'>
                    <Row>
                        {
                            GridColumnData && GridColumnData.map((item, index) => (
                                <div className={`text-center ${item.class}`} key={index}>
                                    <span>{item.text}</span>
                                </div>
                            ))
                        }
                    </Row>
                </CardBody>
            </Card >
        </Col >
    )
}

export default GridColumn