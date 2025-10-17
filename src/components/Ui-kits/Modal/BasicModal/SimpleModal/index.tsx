import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom'
import CommonModal from 'CommonElements/Ui-kits/CommonModal'
import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap'
import { ExploreMore, Simple, SimpleModalPara, SimpleText, Upto } from 'utils/Constant'

const SimpleModal = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const ModalData = {
        isOpen: modal,
        toggler: toggle,
        title: 'Simple Modal',
    }
    return (
        <Fragment>
            <Button color='secondary' onClick={() => { toggle() }} type="button" >{Simple}</Button>
            <CommonModal modalData={ModalData}>
                <div className="modal-toggle-wrapper">
                    <h4>{Upto}<strong className="txt-danger">85% OFF</strong>{SimpleText}</h4>
                    <div className="modal-img">
                        <Image src='/assets/gif/online-shopping.gif' alt="online-shopping" width={100} height={100} />
                    </div>
                    <p className="text-sm-center">{SimpleModalPara}</p>
                    <Button
                        color='primary'
                        className="d-flex align-items-center gap-2 text-light ms-auto"
                        type="button"
                        onClick={() => toggle()}
                    >
                        {ExploreMore}
                        <FeatherIconCom iconName='ArrowRight' />
                    </Button>
                </div>
            </CommonModal>
        </Fragment>
    )
}

export default SimpleModal