import React, { Fragment, useState } from 'react'
import { Tooltip } from 'reactstrap'
import { And, HoverText, Thatlink, Thislink, Tooltipsmodal } from 'utils/Constant'

const TooltipLink = () => {
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)

    const openSet = () => { setOpen(!open) }
    const openSet1 = () => { setOpen1(!open1) }

    return (
        <Fragment>
            <h5>{Tooltipsmodal}</h5>
            <p className="mt-2 mb-0">
                <a className="tooltip-test text-info" href="#" id="Tooltip11">{Thislink}</a> {And}
                <Tooltip autohide={true} isOpen={open} target="Tooltip11" toggle={openSet}> {'Tooltip'}</Tooltip>
                <a className="tooltip-test text-info" href="#" id="Tooltip12"> {Thatlink}</a>{HoverText}
                <Tooltip autohide={true} isOpen={open1} target="Tooltip12" toggle={openSet1}> {'Tooltip'}</Tooltip>
            </p>
        </Fragment>
    )
}

export default TooltipLink