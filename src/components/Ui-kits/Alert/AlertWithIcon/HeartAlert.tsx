import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { Alert, HertText, Notificationcheck } from 'utils/Constant'

const HeartAlert = () => {
    const [active, setActive] = useState<boolean>(true)
    return (
        <div className={`alert border-danger alert-dismissible fade p-0 mb-0 ${active ? 'show' : 'd-none'}`} role="alert">
            <div className="alert-arrow bg-danger">
                <i className="icon-heart" />
            </div>
            <p>{HertText}<strong className="txt-dark">{Notificationcheck}</strong></p>
            <Button className="p-0 border-0 me-2 ms-auto" type="button" onClick={() => { setActive(false) }} >
                <span className="bg-danger text-white px-3 py-1" aria-hidden="true">{Alert}</span>
            </Button>
        </div>
    )
}

export default HeartAlert