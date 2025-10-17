import React from 'react'
import { CardBody } from 'reactstrap'
import { BadgeHeading, Checkout, Inbox, Latest, Login, Logout, Trending } from 'utils/Constant'

const BadgeHeadingBody = () => {
    return (
        <CardBody>
            <h1 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeading} 1
                <span className="badge badge-primary">{Latest}</span>
            </h1>
            <h2 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeading} 2
                <span className="badge badge-secondary">{Trending}</span>
            </h2>
            <h3 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeading} 3
                <span className="badge badge-success">{Checkout}</span>
            </h3>
            <h4 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeading} 4
                <span className="badge badge-warning">{Inbox}</span>
            </h4>
            <h5 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeading} 5
                <span className="badge badge-danger">{Login}</span>
            </h5>
            <h6 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeading} 6
                <span className="badge badge-dark">{Logout}</span>
            </h6>
        </CardBody>
    )
}

export default BadgeHeadingBody