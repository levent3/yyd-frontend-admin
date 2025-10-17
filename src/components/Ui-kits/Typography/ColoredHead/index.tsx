import CardHead from 'CommonElements/CardHead'
import TableHead from 'CommonElements/TableHead'
import { colorHeadData } from 'Data/Ui-kits/TypographyData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ColorHeadBody from './ColorHeadBody'

const ColoredHead = () => {
    const submenuObj = [
        {
            text: "All HTML headings, ",
            code: '<h1>'
        },
        {
            text: ' through',
            code: '<h6>'
        },
        {
            text: ', are available.'
        }
    ]
    return (
        <Col xxl={6}>
            <Card>
                <CardHead title='Colored Headings' subTitle={submenuObj} />
                <CardBody>
                    <div className='table-responsive'>
                        <table className='table mb-0 typography-table'>
                            <TableHead headeData={colorHeadData} />
                            <ColorHeadBody />
                        </table>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ColoredHead