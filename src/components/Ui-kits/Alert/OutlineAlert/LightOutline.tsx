import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom'
import React, { useState } from 'react'
import { Button } from 'reactstrap';
import { LightOutlineText, Oneof, YouTubes } from 'utils/Constant'

const LightOutline = () => {
    const [active, setActive] = useState<boolean>(true);
    return (
        <div className={`alert txt-primary border-primary alert-dismissible fade ${active ? 'show' : 'd-none'}`} role="alert">
            <FeatherIconCom iconName='Clock' />
            <p>{Oneof}<strong>{YouTubes}</strong>{LightOutlineText}</p>
            <Button color='transperant' className="btn-close" type="button" aria-label="Close" onClick={() => { setActive(false) }} />
        </div>
    )
}

export default LightOutline