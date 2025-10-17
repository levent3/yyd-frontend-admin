import React from 'react'
import EventList from './EventList'
import { Afresher, FresherTime, Ofwrrior } from 'utils/Constant'

const HoverEvent = () => {
    return (
        <li className="timeline-event">
            <label className="timeline-event-icon" />
            <div className="timeline-event-wrapper">
                <p className="timeline-thumbnail">{FresherTime}</p>
                <h5>{Ofwrrior}</h5>
                <span className="text-muted">{Afresher}</span>
                <p className="pt-3 mb-0"></p>
                <EventList />
            </div>
        </li>
    )
}

export default HoverEvent