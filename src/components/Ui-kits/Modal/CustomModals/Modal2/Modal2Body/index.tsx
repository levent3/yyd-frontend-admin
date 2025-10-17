import React from 'react'
import { CubaLogin, CubaLoginText } from 'utils/Constant'
import StaticModalForm from '../../../StaticModal/StaticModalForm'

type propsType = {
    toggle: () => void;
}

const Modal2Body = ({ toggle }: propsType) => {
    return (
        <div className="modal-toggle-wrapper">
            <h3>{CubaLogin}</h3>
            <p>{CubaLoginText}</p>
            <StaticModalForm toggle={toggle} />
        </div>

    )
}

export default Modal2Body