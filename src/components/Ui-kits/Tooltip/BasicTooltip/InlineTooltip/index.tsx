import React, { useState } from 'react'
import { Button, Tooltip } from 'reactstrap'
import { InlineTooltipContent, InlineTooltiptext, InsideText, InsideText2, tooltip } from 'utils/Constant'

const InlineTooltip = () => {
    const [open, setOpen] = useState(false);
    const [showId, setShowId] = useState<string>('');
    const toggle = () => { setOpen(!open) }
    return (
        <div>
            <h5 className="mb-1 py-4 pb-0">{InlineTooltipContent}</h5>
            <p className='mb-3'> {InlineTooltiptext}
                <a className="txt-primary fw-bold" id='Tooltip1' onMouseEnter={() => { setShowId('Tooltip1') }} >  {tooltip}</a> {InsideText}
                <Button color='success' id='Tooltip2' onMouseEnter={() => { setShowId('Tooltip2') }} className="text-white border-0 ms-1 px-3 py-1 me-0 mb-0">{'button'}</Button>{InsideText2}
            </p>
            <Tooltip isOpen={(open === true && showId === 'Tooltip1') && true} target="Tooltip1" toggle={toggle}>{'Popover text'}</Tooltip>
            <Tooltip isOpen={(open === true && showId === 'Tooltip2') && true} target="Tooltip2" toggle={toggle}>{'button'}</Tooltip>
        </div>
    )
}

export default InlineTooltip