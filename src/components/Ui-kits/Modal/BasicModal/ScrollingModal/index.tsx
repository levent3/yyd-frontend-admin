import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom';
import CommonModal from 'CommonElements/Ui-kits/CommonModal'
import { ScrollingModalData } from 'Data/Ui-kits/ModalData';
import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap';
import { Scrollingcontent, UXDesigner, WedDesigner } from 'utils/Constant';

const ScrollingModal = () => {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = () => { setModal(!modal); }
    const ModalData = {
        isOpen: modal,
        header: true,
        footer: true,
        toggler: toggle,
        title: 'Scrolling Modal',
    }
    return (
        <Fragment>
            <Button color='success' onClick={() => { toggle() }} type="button" >{Scrollingcontent}</Button>
            <CommonModal modalData={ModalData}>
                <>
                    <h6>{WedDesigner}</h6>
                    {
                        ScrollingModalData && ScrollingModalData.map((item, index) => (
                            <Fragment key={index}>
                                {index === 3 && <h6>{UXDesigner}</h6>}
                                <div className={`d-flex ${item.class}`}>
                                    <div className="flex-shrink-0">
                                        <FeatherIconCom iconName='ArrowRightCircle' className='svg-modal' />
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        {index === 3 ? <p className='pb-4'>{item.text}</p> : <p>{item.text}</p>}
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

export default ScrollingModal