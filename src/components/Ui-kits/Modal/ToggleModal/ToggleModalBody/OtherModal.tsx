import CommonModal from 'CommonElements/Ui-kits/CommonModal'
import Image from 'next/image';
import React from 'react'
import { Button } from 'reactstrap';
import { Alreadyleaving, LogoutText, Notamember, Register, YesLogout } from 'utils/Constant';

type propsType = {
    modal: boolean
    toggle: () => void;
}

const OtherModal = ({ modal, toggle }: propsType) => {
    const ModalData = {
        isOpen: modal,
        class: 'modal-dialog-centered',
        toggler: toggle
    }
    return (
        <CommonModal modalData={ModalData}>
            <div className='modal-toggle-wrapper'>
                <ul className="modal-img">
                    <li>
                        <Image src="/assets/gif/logout.gif" alt="logout" width={100} height={100} />
                    </li>
                </ul>
                <h4 className="pt-3 text-center">{Alreadyleaving}</h4>
                <p className="text-center">{LogoutText}</p>
                <span className="d-block text-center mb-4">{Notamember}<a className="ms-1" href="dashboard-02.html">{Register}</a></span>
                <Button color='dark' className="d-flex m-auto" onClick={() => toggle()} >{YesLogout}</Button>
            </div>
        </CommonModal>
    )
}

export default OtherModal