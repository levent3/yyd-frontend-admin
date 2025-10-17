import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom'
import React, { useState } from 'react'
import { Button } from 'reactstrap';
import { DarkOutlineText, Welldone } from 'utils/Constant'

const DarkOutline = () => {
    const [active, setActive] = useState<boolean>(true);
    return (
        <div className={`alert txt-success border-success outline-2x alert-dismissible fade alert-icons ${active ? 'show' : 'd-none'}`} role="alert">
            <FeatherIconCom iconName='ThumbsUp' />
            <p><b> {Welldone}</b>{DarkOutlineText}</p>
            <Button color='transperant' className="btn-close" type="button" onClick={() => { setActive(false) }} />
        </div>
    )
}

export default DarkOutline