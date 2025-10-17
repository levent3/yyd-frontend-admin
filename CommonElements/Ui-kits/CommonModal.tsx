import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { Close, SaveChanges } from 'utils/Constant'

type modalDataType = {
    isOpen: boolean;
    header?: boolean;
    class?: string;
    footer?: boolean;
    toggler: () => void
    title?: string;
    size?: string;
    bodyClass?: string;
    button?: string
}

type propsTypes = {
    modalData: modalDataType
    children: string | JSX.Element | JSX.Element[]
}

const CommonModal = ({ modalData, children }: propsTypes) => {
    return (
        <Modal className={modalData.class} isOpen={modalData.isOpen} toggle={modalData.toggler} size={modalData.size}>
            {modalData.header && <ModalHeader toggle={modalData.toggler}>
                {modalData.title}
            </ModalHeader>}
            <ModalBody className={modalData.bodyClass}>
                {children}
            </ModalBody>
            {modalData.footer && <ModalFooter>
                <Button color='secondary' onClick={modalData.toggler}>{Close}</Button>
                <Button color='primary' onClick={modalData.toggler}>{modalData.button ? modalData.button : SaveChanges}</Button>
            </ModalFooter>}
        </Modal>
    )
}
export default CommonModal