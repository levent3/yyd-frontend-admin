import React, { Dispatch, SetStateAction } from 'react'
import { Button } from 'reactstrap'
import { Toggleboth, Togglefirst, Togglesecond } from 'utils/Constant'

type propsType = {
    setCollapesId: Dispatch<SetStateAction<{
        collapes1: boolean, collapes2: boolean
    }>>
    collapesId: { collapes1: boolean, collapes2: boolean }
}

const CollapesButton = ({ setCollapesId, collapesId }: propsType) => {
    const changeCollaps = (id: number) => {
        switch (id) {
            case 1:
                setCollapesId(pre => ({
                    ...pre,
                    collapes1: collapesId.collapes1 !== true ? true : false
                }))
                break;
            case 2:
                setCollapesId(pre => ({
                    ...pre,
                    collapes2: collapesId.collapes2 !== true ? true : false
                }))
                break;
            case 3:
                setCollapesId(pre => ({
                    ...pre,
                    collapes1: collapesId.collapes1 !== true ? true : false,
                    collapes2: collapesId.collapes2 !== true ? true : false
                }))
                break;
            default:
                break;
        }
    }
    return (
        <div className='common-flex'>
            <Button color='primary' type="button" onClick={() => { changeCollaps(1) }} >{Togglefirst}</Button>
            <Button color='warning' type="button" onClick={() => { changeCollaps(2) }} >{Togglesecond}</Button>
            <Button color='success' type="button" onClick={() => { changeCollaps(3) }} >{Toggleboth}</Button>
        </div>
    )
}

export default CollapesButton