import React from 'react'
import { Button, Col } from 'reactstrap'
import { LaunchThemeText, Launch_Theme, Readmore } from 'utils/Constant'

const LunchTime = () => {
    return (
        <Col xxl={4} className="horizontal-timeline">
            <div>
                <div className="vertical-line" />
                <li className="list-inline-item event-list">
                    <div className="px-4">
                        <div className="event-date alert-light-warning txt-warning">7 Dec</div>
                        <h5>{Launch_Theme}</h5>
                        <p className="text-muted">{LaunchThemeText}</p>
                        <div>
                            <Button color='primary' className="px-3" >{Readmore}</Button>
                        </div>
                    </div>
                </li>
            </div>
        </Col>
    )
}

export default LunchTime