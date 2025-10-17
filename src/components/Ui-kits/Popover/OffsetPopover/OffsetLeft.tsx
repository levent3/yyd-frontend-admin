import React, { useState } from 'react'
import { Button, Popover, PopoverBody, PopoverHeader } from 'reactstrap'
import { PopoverOnLeft, PopoverOnLeftText, Popoveroffset_50 } from 'utils/Constant'

const OffsetLeft = () => {
    const [popover, setPopover] = useState(false);
    const Toggle = () => setPopover(!popover);
    return (
        <>
            <Button color='dark' className="mb-0 me-0" id='offset' onClick={() => { Toggle() }} >{Popoveroffset_50}</Button>
            <Popover placement="left" isOpen={popover} target="offset" toggle={Toggle} offset={[-50, 0]}>
                <PopoverHeader>{PopoverOnLeft}</PopoverHeader>
                <PopoverBody>{PopoverOnLeftText}</PopoverBody>
            </Popover>
        </>
    )
}

export default OffsetLeft