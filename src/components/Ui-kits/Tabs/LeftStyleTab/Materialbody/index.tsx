import { LeftTabData } from 'Data/Ui-kits/TabData'
import React from 'react'
import { TabContent, TabPane } from 'reactstrap'

const MaterialBody = ({ tabId }: { tabId: string }) => {
    return (
        <TabContent activeTab={tabId}>
            {
                LeftTabData && LeftTabData.map((item, index) => (
                    <TabPane className="fade show" tabId={item.id} key={index}>
                        {item.text}
                    </TabPane>
                ))
            }
        </TabContent>
    )
}

export default MaterialBody