import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom'
import CommonModal from 'CommonElements/Ui-kits/CommonModal'
import { ScrollingModalData } from 'Data/Ui-kits/ModalData'
import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap'
import { FullscreenText, Fullscreenmodal, UXDesigner, WebDesign, WedDesigner } from 'utils/Constant'

const FullscreenOutline = () => {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal); }
    const ModalData = {
        isOpen: modal,
        header: true,
        footer: true,
        class: 'modal-fullscreen',
        toggler: toggle,
        title: 'Full Screen Modal',
        button: 'Save'
    }
    return (
        <Fragment>
            <Button color='outline-secondary-2x' onClick={() => { toggle() }}>{Fullscreenmodal}</Button>
            <CommonModal modalData={ModalData}>
                <div className="large-modal-header">
                    <FeatherIconCom iconName='ChevronsRight' />
                    <h6>{WebDesign} </h6>
                </div>
                <p className="modal-padding-space">{FullscreenText}</p>
                <>
                    <h6>{WedDesigner}</h6>
                    {
                        ScrollingModalData && ScrollingModalData.map((item, index) => (
                            <Fragment key={index}>
                                {index === 4 && <h6>{UXDesigner}</h6>}
                                <div className={`d-flex ${item.class}`}>
                                    <div className="flex-shrink-0">
                                        <FeatherIconCom iconName='ArrowRightCircle' className='svg-modal' />
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        {index === 3 ? <p className='pb-4 mb-0'>{item.text}</p> : <p className='mb-0'>{item.text}</p>}
                                    </div>
                                </div>
                            </Fragment>
                        ))
                    }
                </>
            </CommonModal>
        </Fragment>
    )
}

export default FullscreenOutline