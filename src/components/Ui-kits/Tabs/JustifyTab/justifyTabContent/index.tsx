import { JustifyTabData } from 'Data/Ui-kits/TabData'
import Image from 'next/image'
import React from 'react'
import { TabContent, TabPane } from 'reactstrap'
import { ImgPath } from 'utils/Constant'

const JustifyTabContent = ({ tabId }: { tabId: string }) => {
    return (
        <TabContent activeTab={tabId}>
            {
                JustifyTabData && JustifyTabData.map((item, index) => (
                    <TabPane className="fade show" tabId={item.id} key={index}>
                        <div className='designer-details'>
                            {
                                item.data && item.data.map((item, index) => (
                                    <div className="designer-profile" key={index}>
                                        <div className="designer-wrap">
                                            <Image className="designer-img" src={`${ImgPath}${item.img}`} alt="profile" width={50} height={50} />
                                            <div className="designer-content">
                                                <h6>{item.head}</h6>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPane>
                ))
            }
        </TabContent>
    )
}

export default JustifyTabContent