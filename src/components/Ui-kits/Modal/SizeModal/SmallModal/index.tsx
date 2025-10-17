import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom'
import CommonModal from 'CommonElements/Ui-kits/CommonModal'
import { FullscreenModalData } from 'Data/Ui-kits/ModalData'
import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap'
import { Small_Modal } from 'utils/Constant'

const SmallModal = () => {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal); }
    const ModalData = {
        isOpen: modal,
        header: true,
        class: 'modal-sm',
        toggler: toggle,
        title: 'Small modal',
        size: 'fullscreen'
    }
    return (
        <Fragment>
            <Button color='primary' type="button" onClick={() => { toggle() }}>{Small_Modal}</Button>
            <CommonModal modalData={ModalData} >
                <>
                    {
                        FullscreenModalData && FullscreenModalData.map((item, index) => (
                            <Fragment key={index}>
                                {index <= 2 &&
                                    <Fragment key={index}>
                                        <div className="large-modal-header">
                                            <FeatherIconCom iconName='ChevronRight' />
                                            <h6>{item.title}</h6>
                                        </div>
                                        <p className={`modal-padding-space ${index === 2 && 'mb-0'}`}>{item.text}</p>
                                    </Fragment>
                                }
                            </Fragment>
                        ))
                    }
                </>
            </CommonModal>
        </Fragment>
    )
}

export default SmallModal