import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom';
import CommonModal from 'CommonElements/Ui-kits/CommonModal';
import { BelowsmData } from 'Data/Ui-kits/ModalData';
import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap';
import { FullscreenText, Fullscreenbelow_xxl, UXDesigner, WebDesign, WedDesigner } from 'utils/Constant';

const BelowXXl = () => {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal); }
    const ModalData = {
        isOpen: modal,
        header: true,
        footer: true,
        toggler: toggle,
        title: 'Full Screen Below xxl'
    }
    return (
        <Fragment>
            <Button color='outline-danger-2x' className="btn-outline-danger-2x" type="button" onClick={() => { toggle() }} >{Fullscreenbelow_xxl}</Button>
            <CommonModal modalData={ModalData}>
                <div className="large-modal-header">
                    <FeatherIconCom iconName='ChevronsRight' />
                    <h6>{WebDesign}</h6>
                </div>
                <p className="modal-padding-space">{FullscreenText}</p>
                <h6>{WedDesigner}</h6>
                <>
                    {
                        BelowsmData && BelowsmData.map((item, index) => (
                            <Fragment key={index}>
                                <div className={`d-flex ${item.class}`}>
                                    <div className="flex-shrink-0">
                                        <FeatherIconCom iconName='ArrowRightCircle' className='svg-modal' />
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p className={index === 1 ? 'pb-4 mb-0' : 'mb-0'}>{item.text}</p>
                                    </div>
                                </div>
                                {index === 1 && <h6>{UXDesigner}</h6>}
                            </Fragment>
                        ))
                    }
                </>
            </CommonModal>
        </Fragment>
    )
}

export default BelowXXl