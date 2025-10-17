import React from 'react'
import { Button, Col } from 'reactstrap'
import { Meet_up, Readmore, YouMayConnect } from 'utils/Constant'

const MeetUp = () => {
    return (
        <Col xxl={4} sm={6}>
            <div>
                <li className="list-inline-item event-list">
                    <div className="px-4">
                        <div className="event-date alert-light-success txt-success">4 Feb</div>
                        <h5>{Meet_up}</h5>
                        <p className="text-muted">{YouMayConnect}</p>
                        <div className="read-more-btn">
                            <Button color='primary' className="px-3" >{Readmore}</Button>
                        </div>
                    </div>
                </li>
                <div className="vertical-line" />
            </div>
        </Col>
    )
}

export default MeetUp