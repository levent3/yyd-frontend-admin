import CommonModal from 'CommonElements/Ui-kits/CommonModal'
import Image from 'next/image';
import React, { useState } from 'react'
import { Button } from 'reactstrap';
import { CenteredError, Centeredtext, Close } from 'utils/Constant';

type propsType = {
    modal: boolean;
    toggle: () => void;
}

const CenterdModalBody = ({ modal, toggle }: propsType) => {
    const ModalData = {
        isOpen: modal,
        class: 'modal-dialog-centered',
        toggler: toggle,
        title: 'Centered Modal',
    }
    return (
        <CommonModal modalData={ModalData} >
            <div className="modal-toggle-wrapper">
                <ul className="modal-img">
                    <li>
                        <Image src={'/assets/gif/danger.gif'} alt="error" width={100} height={100} />
                    </li>
                </ul>
                <h4 className="text-center pb-2">{CenteredError}</h4>
                <p className="text-center">{Centeredtext}</p>
                <Button color='secondary' className="d-flex m-auto" type="button" onClick={toggle}>{Close}</Button>
            </div>
        </CommonModal>
    )
}

export default CenterdModalBody