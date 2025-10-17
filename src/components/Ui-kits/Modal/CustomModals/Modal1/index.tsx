import React, { useState } from 'react'
import { Button, Col } from 'reactstrap'
import DotText from '../DotText'
import { ClickOut, ImgPath, Modal_1, ProfileModal, TextModal } from 'utils/Constant'
import CommonModal from 'CommonElements/Ui-kits/CommonModal'
import Modal1Body from './Modal1Body'

const Modal1 = () => {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal) }
    const ModalData = {
        isOpen: modal,
        class: 'modal-dialog-centered',
        toggler: toggle,
        bodyClass: 'p-0'
    }
    return (
        <Col xl={4} md={6} className='custom-alert text-center'>
            <div className='card-wrapper border rounded-3 h-100'>
                <div className='cuba-demo-img'>
                    <DotText />
                    <div className="title-wrapper pb-3 modal-heading">
                        <h5 className="theme-name mb-0">
                            <span>{Modal_1}</span>{ProfileModal}
                        </h5>
                        <p>{TextModal}</p>
                    </div>
                    <div className="overflow-hidden">
                        <img className="img-fluid" src={`${ImgPath}/alert/social.png`} alt="learning" />
                        <Button color='primary' className="mx-auto mt-3" onClick={() => { toggle() }}>{ClickOut}</Button>
                    </div>
                    <CommonModal modalData={ModalData}>
                        <Modal1Body />
                    </CommonModal>
                </div>
            </div>
        </Col>
    )
}

export default Modal1