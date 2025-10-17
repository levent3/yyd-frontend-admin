import React from 'react'
import { Button, Col } from 'reactstrap'
import { Conference_util, Conferencetext2, Readmore } from 'utils/Constant'

const Conference2 = () => {
    return (
        <Col xxl={4} sm={6}>
            <div>
                <div className="vertical-line" />
                <li className="list-inline-item event-list">
                    <div className="px-4">
                        <div className="event-date alert-light-primary txt-primary">1 Jan</div>
                        <h5>{Conference_util}</h5>
                        <p className="text-muted">{Conferencetext2}</p>
                        <div>
                            <Button color='primary' className="px-3">{Readmore}</Button>
                        </div>
                    </div>
                </li>
            </div>
        </Col>
    )
}

export default Conference2