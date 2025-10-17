import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom';
import CommonModal from 'CommonElements/Ui-kits/CommonModal'
import { FullscreenModalData } from 'Data/Ui-kits/ModalData';
import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap'
import { FullScreenModal } from 'utils/Constant';

const Fullscreen = () => {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal); }
    const ModalData = {
        isOpen: modal,
        header: true,
        class: 'modal-fullscreen',
        toggler: toggle,
        title: 'Extra Large modal',
        size: 'fullscreen',
    }
    return (
        <Fragment>
            <Button color='secondary' type="button" onClick={() => { toggle() }}>{FullScreenModal}</Button>
            <CommonModal modalData={ModalData} >
                <>
                    {
                        FullscreenModalData && FullscreenModalData.map((item, index) => (
                            <Fragment key={index}>
                                <div className="large-modal-header">
                                    <FeatherIconCom iconName='ChevronRight' />
                                    <h6>{item.title}</h6>
                                </div>
                                <p className="modal-padding-space">{item.text}</p>
                            </Fragment>
                        ))
                    }
                </>
            </CommonModal>
        </Fragment>
    )
}

export default Fullscreen