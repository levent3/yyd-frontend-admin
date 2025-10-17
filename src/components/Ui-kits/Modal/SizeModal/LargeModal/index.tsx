import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom';
import CommonModal from 'CommonElements/Ui-kits/CommonModal'
import { LargeModalData } from 'Data/Ui-kits/ModalData';
import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap'
import { Large_Modal, Startyourgoals } from 'utils/Constant';

const LargeModal = () => {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal); }
    const ModalData = {
        isOpen: modal,
        header: true,
        class: 'modal-lg',
        toggler: toggle,
        title: 'Large modal',
        size: 'fullscreen',
    }
    return (
        <Fragment>
            <Button color='success' type="button" onClick={() => { toggle() }}>{Large_Modal}</Button>
            <CommonModal modalData={ModalData} >
                <div className="large-modal-header">
                    <FeatherIconCom iconName='ChevronsRight' />
                    <h6>{Startyourgoals}</h6>
                </div>
                <>
                    {
                        LargeModalData && LargeModalData.map((item, index) => (
                            <Fragment key={index}>
                                {
                                    index <= 2 && <p className='modal-padding-space mb-0'>{item.text}</p>
                                }
                                {
                                    index > 2 && <div className="large-modal-body">
                                        <FeatherIconCom iconName='CornerUpRight' />
                                        <p className="ps-1 mb-0">{item.text}</p>
                                    </div>

                                }
                            </Fragment>
                        ))
                    }
                </>
            </CommonModal>
        </Fragment>
    )
}

export default LargeModal