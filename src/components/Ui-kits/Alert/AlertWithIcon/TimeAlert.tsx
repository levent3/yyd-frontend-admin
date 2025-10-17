import React, { useState } from 'react'
import { Button } from 'reactstrap';
import { Check, Yourtime, minute } from 'utils/Constant'

const TimeAlert = () => {
    const [active, setActive] = useState<boolean>(true);
    return (
        <div className={`alert border-warning alert-dismissible fade p-0 ${active ? 'show' : 'd-none'}`} role="alert">
            <div className="alert-arrow bg-warning">
                <i className="icon-timer" />
            </div>
            <p>{Yourtime}<strong className="txt-dark">5</strong> {minute}</p>
            <Button className="p-0 border-0 me-2 ms-auto" type="button" onClick={() => { setActive(false) }}>
                <span className="bg-warning text-light px-3 py-1" aria-hidden="true">{Check}</span>
            </Button>
        </div>
    )
}

export default TimeAlert