import React, { useState } from 'react'
import { Button, Col } from 'reactstrap'
import DotText from '../DotText'
import { BalanceModal, BalanceText, ClickOut, ImgPath, Modal_3 } from 'utils/Constant'
import CommonModal from 'CommonElements/Ui-kits/CommonModal'
import Modal3Body from './Modal3Body/index.tsx'

const Modal3 = () => {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal) }
    const ModalData = {
        isOpen: modal,
        class: 'modal-dialog-centered',
        toggler: toggle,
        bodyClass: 'p-0 '
    }
    return (
        <Col xl={4} md={6} className='custom-alert text-center'>
            <div className='card-wrapper border rounded-3 h-100'>
                <div className='cuba-demo-img'>
                    <DotText />
                    <div className="title-wrapper pb-3 modal-heading">
                        <h5 className="theme-name mb-0"><span>{Modal_3}</span>{BalanceModal}</h5>
                        <p>{BalanceText}</p>
                    </div>
                    <div className="overflow-hidden balance-modal">
                        <img className="img-fluid" src={`${ImgPath}/alert/balance.png`} alt="balance" />
                        <Button color='primary' className="mx-auto mt-3" onClick={() => { toggle() }} >{ClickOut}</Button>
                    </div>
                    <CommonModal modalData={ModalData}>
                        <Modal3Body />
                    </CommonModal>
                </div>
            </div>
        </Col>
    )
}

export default Modal3