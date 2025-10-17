import React, { useState } from 'react'
import { Button, Popover, PopoverBody, PopoverHeader } from 'reactstrap'
import { PopoverOffsetText, Popoveroffset50, Popovertitle } from 'utils/Constant'

const OffsetRight = () => {
    const [popover, setPopover] = useState(false);
    const Toggle = () => setPopover(!popover);
    return (
        <>
            <Button color='secondary' className="mb-0 me-0" id='PopoverOffset' onClick={() => { Toggle() }} >{Popoveroffset50}</Button>
            <Popover placement="right" isOpen={popover} target="PopoverOffset" toggle={Toggle} offset={[50, 0]}>
                <PopoverHeader>{Popovertitle}</PopoverHeader>
                <PopoverBody>{PopoverOffsetText}</PopoverBody>
            </Popover>
        </>
    )
}

export default OffsetRight