import React from 'react'
import { MollyBoake, Mollymail, Mollytext } from 'utils/Constant'

const EventList = () => {
    return (
        <div className="list-group main-lists-content">
            <a className="list-group-item list-group-item-action border-0 p-0 mb-4" href="#" aria-current="true">
                <div className="d-flex w-100 justify-content-between align-items-center">
                    <div className="list-wrapper">
                        <img className="list-img" src="/assets/images/user/1.jpg" alt="profile" />
                        <div className="list-content">
                            <h6>{MollyBoake}</h6>
                            <p>{Mollymail}</p>
                        </div>
                    </div>
                    <div className="timeline-icon">
                        <i className="icon-facebook" />
                        <i className="icon-google" />
                        <i className="icon-twitter-alt" />
                    </div>
                </div>
                <p className="mb-1">{Mollytext}</p>
            </a>
        </div>
    )
}

export default EventList