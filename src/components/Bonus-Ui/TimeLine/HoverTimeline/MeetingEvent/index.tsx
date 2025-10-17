import React from 'react'
import Profile from './Profile'
import { Leverton, USMeeting } from 'utils/Constant'

const MeetingEvent = () => {
    return (
        <li className="timeline-event">
            <label className="timeline-event-icon" />
            <div className="timeline-event-wrapper">
                <p className="timeline-thumbnail">December 2022 - Meetup</p>
                <h5>{USMeeting}</h5>
                <span className="text-muted">{Leverton}</span>
                <p className="pt-3 mb-0" />
                <Profile />
            </div>
        </li>
    )
}

export default MeetingEvent