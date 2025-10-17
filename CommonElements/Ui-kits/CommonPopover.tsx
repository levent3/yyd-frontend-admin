import React, { Fragment, useState } from 'react'
import { Button, Popover, PopoverBody, PopoverHeader } from 'reactstrap'

type objType = {
    id?: string;
    placement: any;
    Popoverheader?: string;
    Popoverbody?: string;
    btncolor?: string;
    btntext?: string;
    trigger?: string;
}
type propsType = {
    data: objType
}

const CommonPopover = ({ data }: propsType) => {
    const [popover, setPopover] = useState(false);
    const Toggle = () => setPopover(!popover);
    return (
        <Fragment>
            <Button color={`${data.btncolor}`} className="example-popover" id={`${'Popover-' + data.id}`}>{data.btntext}</Button >
            <Popover
                placement={data.placement}
                isOpen={popover}
                target={'Popover-' + data.id}
                toggle={Toggle}
                trigger={data.trigger}
            >
                <PopoverHeader>{data.Popoverheader}</PopoverHeader>
                <PopoverBody>
                    {data.Popoverbody}
                </PopoverBody>
            </Popover>

        </Fragment>
    )
}

export default CommonPopover