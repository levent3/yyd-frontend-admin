import React from 'react'
import { Card, CardBody, CardFooter, Col } from 'reactstrap'
import { CubaTheme, InfoBodyText, InfoColorBody, UXDesigner } from '../../../../../utils/Constant'
import CardHead from 'CommonElements/CardHead'

const InfoColorbody = () => {
    return (
        <Col xl={4} sm={6}>
            <Card className='height-equal'>
                <CardHead title={InfoColorBody} subTitle={[]} />
                <CardBody className='bg-info text-white'>
                    <h5 className="pb-2">{UXDesigner} </h5>
                    <p className="mb-0">{InfoBodyText}</p>
                </CardBody>
                <CardFooter>
                    <h6 className="mb-0 text-end">{CubaTheme}</h6>
                </CardFooter>
            </Card>
        </Col>
    )
}

export default InfoColorbody