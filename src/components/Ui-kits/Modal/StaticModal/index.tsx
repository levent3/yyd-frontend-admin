import CardHead from 'CommonElements/CardHead'
import CommonModal from 'CommonElements/Ui-kits/CommonModal'
import React, { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { CubaLogin, CubaLoginText, Staticbackdropmodal } from 'utils/Constant'
import StaticModalForm from './StaticModalForm'

const StaticModal = () => {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal) }
    const ModalData = {
        isOpen: modal,
        toggler: toggle,
        bodyClass: 'social-profile text-start p-3'
    }
    const submenuObj = [
        {
            text: "When backdrop is set to static, the modal will not close when clicking outside of it. Click the button below to try it.",
        }
    ]
    return (
        <Col xl={4}>
            <Card>
                <CardHead title='Static Backdrop Modal' subTitle={submenuObj} />
                <CardBody>
                    <Button color='primary' onClick={() => { toggle() }} >{Staticbackdropmodal}</Button>
                    <CommonModal modalData={ModalData}>
                        <div className='modal-toggle-wrapper'>
                            <h3>{CubaLogin}</h3>
                            <p>{CubaLoginText}</p>
                            <StaticModalForm toggle={toggle} />
                        </div>
                    </CommonModal>
                </CardBody>
            </Card>
        </Col>
    )
}

export default StaticModal
