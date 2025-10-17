import React from 'react'
import { Tooltip } from 'reactstrap'
type data = {
    isOpen: boolean;
    autoHide: boolean;
    target: string;
    toggle: () => void;
    text: string
}

type propsType = {
    tooltip: data
}

const TooltipCommon = ({ tooltip }: propsType) => {
    return (
        <Tooltip
            autohide={tooltip.autoHide}
            isOpen={tooltip.isOpen}
            target={tooltip.target}
            toggle={tooltip.toggle}
        >
            {tooltip.text}
        </Tooltip>
    )
}

export default TooltipCommon