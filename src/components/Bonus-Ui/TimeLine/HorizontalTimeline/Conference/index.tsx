import React from 'react'
import { Button, Col } from 'reactstrap'
import { Conference_util, ConferencesText, Readmore } from 'utils/Constant'

const Conference = () => {
    return (
        <Col xxl={4} sm={6}>
            <div>
                <li className="list-inline-item event-list">
                    <div className="px-4">
                        <div className="event-date alert-light-primary txt-primary">1 Jan</div>
                        <h5>{Conference_util}</h5>
                        <p className="text-muted">{ConferencesText}</p>
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

export default Conference