import CardHead from 'CommonElements/CardHead'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import GridTableHead from './GridTableHead'
import GridTableBody from './GridTableBody'

const GridOptions = () => {
    const submenuObj = [
        {
            text: "Bootstrap grid system allow all six breakpoints, and any breakpoints you can customize."
        }
    ]
    return (
        <Col sm={12}>
            <Card>
                <CardHead title='Grid Options' subTitle={submenuObj} />
                <CardBody>
                    <div className='table-responsive'>
                        <table className='table table-bordered table-striped'>
                            <GridTableHead />
                            <GridTableBody />
                        </table>
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}

export default GridOptions