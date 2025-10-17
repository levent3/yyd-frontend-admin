import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, CardFooter, Col } from 'reactstrap'
import OffsetBody from './OffsetBody'
import OffsetDataTable from './OffsetFooterTable'

const Offset = () => {
    const submenuObj = [
        {
            text: 'You can offset the grid column using ',
            code: '.offset-'
        },
        {
            text: ' grid class.'
        }
    ]
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Offset' subTitle={submenuObj} />
                <CardBody className='grid-showcase'>
                    <OffsetBody />
                </CardBody>
                <CardFooter className='card-footer'>
                    <OffsetDataTable />
                </CardFooter>
            </Card >
        </Col >
    )
}

export default Offset