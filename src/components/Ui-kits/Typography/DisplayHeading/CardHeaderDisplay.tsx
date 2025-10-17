import React from 'react'
import { CardHeader } from 'reactstrap'
import { DisplayText, DisplayText2, Displayheading, displayheading } from 'utils/Constant'

const CardHeaderDisplay = () => {
    return (
        <CardHeader>
            <h4 className="mb-0">{Displayheading}</h4>
            <p className="f-m-light mt-1">{DisplayText}
                <mark>{displayheading}</mark>{DisplayText2}
            </p>
        </CardHeader>
    )
}

export default CardHeaderDisplay