import CommonModal from 'CommonElements/Ui-kits/CommonModal'
import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap'
import { Cancel, Connectnewaccount, Openfirstmodal, RemoveaccountText } from 'utils/Constant'
import OtherModal from './OtherModal'

const ToggleModalBody = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal); }
    const toggle2 = () => { setOpen(!open); }
    const ModalData = {
        isOpen: modal,
        class: 'modal-dialog-centered',
        toggler: toggle
    }
    return (
        <Fragment>
            <Button color='dark' onClick={() => { toggle() }}>{Openfirstmodal}</Button>
            <CommonModal modalData={ModalData}>
                <div className='modal-toggle-wrapper'>
                    <ul className="modal-img">
                        <li>
                            <Image src="/assets/gif/whatapp.gif" alt="whatsapp" width={100} height={100} />
                        </li>
                        <li>
                            <Image src="/assets/gif/instagram.gif" alt="instagram" width={100} height={100} />
                        </li>
                        <li>
                            <Image src="/assets/gif/facebook.gif" alt="facebook" width={100} height={100} />
                        </li>
                    </ul>
                    <h6>{RemoveaccountText}</h6>
                    <Button color='dark' className="rounded-pill w-100 mt-4" onClick={() => { toggle2() }} >{Connectnewaccount}</Button>
                    <Button color='normal' className="rounded-pill w-100 dark-toggle-btn" type="button" onClick={() => { toggle() }}>{Cancel}</Button>
                </div>
            </CommonModal>
            <OtherModal modal={open} toggle={toggle2} />
        </Fragment>
    )
}

export default ToggleModalBody