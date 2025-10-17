import CardHead from 'CommonElements/CardHead'
import { BadgeListData } from 'Data/Ui-kits/ListData'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const BadgeList = () => {
    const submenuObj = [
        {
            text: 'Use the',
            code: ' .list-group-numbered'
        },
        {
            text: ' modifier class to  numbered list group items.Numbers are generated via CSS for better placement inside list group items.'
        }
    ]
    return (
        <Col xxl={4} md={6}>
            <Card>
                <CardHead title='Numbered & badge lists' subTitle={submenuObj} />
                <CardBody>
                    <ol className='list-group list-group-numbered'>
                        {
                            BadgeListData && BadgeListData.map((item, index) => (
                                <li className="list-group-item d-flex justify-content-between align-items-start flex-wrap" key={index}>
                                    <div className="ms-2 me-auto">{item.text}</div>
                                    <span className={`badge ${item.badgeClass} rounded-pill p-2`}>{item.badgeText}</span>
                                </li>
                            ))
                        }
                    </ol>
                </CardBody>
            </Card>
        </Col>
    )
}

export default BadgeList